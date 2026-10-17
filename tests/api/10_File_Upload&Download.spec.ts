/*
File Upload & Download using API Chaining
API Reference:
https://fakeapi.platzi.com/en/rest/files/
*/


import { test, expect } from '@playwright/test';
import fs from 'fs';
import { PDFParse } from 'pdf-parse';

test.describe.serial('File Upload and  Download', () => {

    let uploadedPdfFile = '';

    test('Upload Pdf File', async ({ request }) => {

        const fileContent = fs.readFileSync('./uploads/report.pdf');

        const response = await request.post(
            'https://api.escuelajs.co/api/v1/files/upload',
            {
                multipart: {
                    file: {
                        name: 'report.pdf',
                        mimeType: 'application/pdf',
                        buffer: fileContent
                    }
                }
            }
        );

        expect(response.status()).toBe(201);

        const responseBody = await response.json();

        expect(responseBody.originalname).toBe('report.pdf');

        uploadedPdfFile = responseBody.filename;

        console.log("Uploaded Pdf File:", uploadedPdfFile);
    });

test('Download PDF and validate its content', async ({ request }) => {
    const response = await request.get(`https://api.escuelajs.co/api/v1/files/${uploadedPdfFile}`);

    // Validate download response
    expect(response.status()).toBe(200);

    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('application/pdf');

    // Read PDF as binary data
    const pdfBuffer = await response.body();

    expect(pdfBuffer.length).toBeGreaterThan(0);
    expect(pdfBuffer.subarray(0, 5).toString('ascii')).toBe('%PDF-');

    // Extract PDF text
    const parser = new PDFParse({ data: pdfBuffer });

    try {
        const result = await parser.getText();
        const pdfText = result.text;

        // Validate expected content
        expect(pdfText).toContain(
            'This is a simple PDF file. Fun fun fun'
        );
    } finally {
        await parser.destroy();
    }
});


})   