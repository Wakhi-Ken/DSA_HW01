const fs = require('fs');

class UniqueIntProcessor {
    static extractUniqueIntegers(inputFilePath, outputFilePath) {
        // Create a set to store unique integers
        const uniqueNumbers = new Set();

        // Read the input file
        fs.readFile(inputFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading the file:", err.message);
                return;
            }

            // Split the file content into lines
            const lines = data.split('\n');
            lines.forEach((line, lineNumber) => {
                const cleanedLine = line.trim();

                // Ensure the line is not empty and contains exactly one integer
                if (!cleanedLine || cleanedLine.split(/\s+/).length !== 1) {
                    console.log(`Line ${lineNumber + 1} skipped: '${line}' (Invalid format)`);
                    return;
                }

                // Try to convert the cleaned line to an integer
                const number = parseInt(cleanedLine, 10);
                if (isNaN(number)) {
                    console.log(`Line ${lineNumber + 1} skipped: '${line}' (Not an integer)`);
                } else {
                    uniqueNumbers.add(number); // Add number to the set
                }
            });

            // Sort the unique integers
            const sortedNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);

            // Write the sorted unique integers to the output file
            fs.writeFile(outputFilePath, sortedNumbers.join('\n'), (err) => {
                if (err) {
                    console.error("Error writing to the file:", err.message);
                    return;
                }

                // Print a summary message
                console.log(`Sorted unique numbers written to: ${outputFilePath}`);
                console.log("Unique numbers:", sortedNumbers);
            });
        });
    }
}

// Example usage
const inputPath = '../../sample_input_for_students/sample_01.txt';
const outputPath = '../../results_for_sample_inputs/sample_01.txt_result.txt';
UniqueIntProcessor.extractUniqueIntegers(inputPath, outputPath);