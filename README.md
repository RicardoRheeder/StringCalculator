# StringCalculator
Simple string calculator that accepts a string of numbers separated by the desired delimiter and outputs the sum of the strings

---

## How to run
1. Navigate terminal to into StringCalculator/ directory
2. Run "node index" to execute the calculator 
3. To edit the input string, edit *input.txt*

### Expected input format:
//\[delimiter]\n[delimiter separated numbers]
- e.g. //,\n    1,  3, 5
- e.g. //;\n    1;  3; 5
- e.g. //@\n    1@  3@ 5

### Rules:
- String cannot posses more than one newline character '\n'
- Negative strings will throw up an exception - thus the dash character ('-') should be avoided
- The function will only sum values between 0 - 1000
