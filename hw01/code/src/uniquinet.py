class UniqueIntProcessor:
    @staticmethod
    def extract_unique_integers(input_file_path, output_file_path):
        # Create a set to store unique integers
        unique_numbers = set()

        # Open the input file and read through each line
        with open(input_file_path, 'r') as file:
            for line_number, line in enumerate(file, start=1):
                # Clean the line by stripping whitespace
                cleaned_line = line.strip()
                
                # Ensure the line is not empty and contains exactly one integer
                if not cleaned_line or len(cleaned_line.split()) != 1:
                    print(f"Line {line_number} skipped: '{line.strip()}' (Invalid format)")
                    continue
                
                try:
                    # Convert the cleaned line to an integer
                    number = int(cleaned_line)
                    unique_numbers.add(number)  # Add number to the set
                except ValueError:
                    print(f"Line {line_number} skipped: '{line.strip()}' (Not an integer)")
                    continue

        # Sort the unique integers
        sorted_numbers = sorted(unique_numbers)

        # Write the sorted unique integers to the output file
        with open(output_file_path, 'w') as output_file:
            for number in sorted_numbers:
                output_file.write(f"{number}\n")

        # Print a summary message
        print(f"Sorted unique numbers written to: {output_file_path}")
        print("Unique numbers:", sorted_numbers)

# Example usage
if __name__ == "__main__":
    input_path = '../../sample_input_for_students/sample_01.txt'
    output_path = '../../results_for_sample_inputs/sample_01.txt_result.txt'
    UniqueIntProcessor.extract_unique_integers(input_path, output_path)