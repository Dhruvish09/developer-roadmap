# Python String Practical for Interview

## 1. Reverse a String
**Answer:**
    ```python
        def reverse_string(my_String):
            res = ""
            for i in my_String:
                res = i + res
            return res

        print("Reverse a String:",reverse_string("Dhruvish patel"))
    ```

## 2. Write a Python program to count the number of vowels in a string
**Answer:**
    ```python
        def count_vowels(input_string):
            vowels = "aeiouAEIOU"
            return sum(1 for char in input_string if char in vowels)

        print("Count of vowls are:",count_vowels("Dhruvish patel"))
    ```

## 3. Write a Python program to find the most frequent character in a string
**Answer:**
    ```python
        def most_frequent(my_String):
            my_dict = {}
            for i in str(my_String).replace(" ",""):
                if i in my_dict:
                    my_dict[i] += 1
                else:
                    my_dict[i] = 1
            result = max(my_dict,key=my_dict.get)

            return result

        print("most frequent character is:",most_frequent("DDhruvish patel"))
    ```

## 4. Write a Python program to find the all most frequent character in a string
**Answer:**
    ```python
        def all_max_frequent(input_string):
            new_dict = {}
            max_frequent = 0
            for i in input_string:
                if i in new_dict:
                    new_dict[i] += 1
                else:
                    new_dict[i] = 1

                max_frequent = max(max_frequent,new_dict[i])

            result = [key for key,value in new_dict.items() if value == max_frequent]

            return result
        print(all_max_frequent("Dhruvish from ahmedabad"))
    ```

## 5. Write a Python program to remove all duplicates from a string and return the result
**Answer:**
    ```python
        def remove_duplicate(my_string):
            new_string = ""
            for i in my_string:
                if i not in new_string:
                    new_string += i

            print(new_string)

        remove_duplicate("Dhruvish pattel")
    ```

## 6. Write a Python program to remove first duplicates from a string and return the result
**Answer:**
    ```python
        def remove_first_duplicate(string):
            seen = set()
            output = ''
            duplicate = False
            for char in string:
                if char not in seen:
                    seen.add(char)
                    output += char
                elif not duplicate:
                    duplicate = True
                else:
                    output += char
            return output
        string = "abcddefgghijjd"
        print(remove_first_duplicate(string)) # output abcdefgghijjd
    ```

## 7. Word Capitalizer
**Answer:**
    ```python
        def capitalize_first_letter_in_each_word(sentence):
            capitalized_words = []
            for word in sentence.split():

                capitalized_words.append(word.capitalize())

            return ' '.join(capitalized_words)

        # Test the function
        input_sentence = "dhruvish Patel from ahmedabad"
        result = capitalize_first_letter_in_each_word(input_sentence)
        print(result)

        # Other sort way

        def capitalize_first_letter_in_each_word(sentence):
            capitalized_words = sentence.title()

            return capitalized_words

        # Test the function
        input_sentence = "dhruvish Patel from ahmedabad"
        result = capitalize_first_letter_in_each_word(input_sentence)
        print(result)
    ```

## 8. Write a Python program to count the number of occurrences of a specific substring in a string
**Answer:**
    ```python
        def count_substring(string, substring):
            return string.count(substring)

        # Usage
        string = "Hello, world! The world is round."
        substring = "world"
        count = count_substring(string, substring)
        print(f"The substring '{substring}' appears {count} times in the string.")
    ```

## 9. Write a Python program to find first non repeated char
**Answer:**
    ```python
        def first_non_repeated_char(input_string):
            char_count_dict = {}

            # Count occurrences of each character
            for char in input_string:
                if char in char_count_dict:
                    char_count_dict[char] += 1
                else:
                    char_count_dict[char] = 1

            # Find the first non-repeated character
            for char, count in char_count_dict.items():
                if count == 1:
                    return char, count

            return None, None  # Return None if there is no non-repeated character

        # Example usage:
        input_string = "Dhruvish Patel"
        result_char, result_count = first_non_repeated_char(input_string)

        if result_char is not None:
            print(f"The first non-repeated character is '{result_char}' with a count of {result_count}.")
        else:
            print("No non-repeated characters found.")
    ```

## 10. Write a Python program to get a string made of the first 2 and last 2 characters of a given string. If the string length is less than 2, return the empty string instead
**Answer:**
    ```python
        # Sample String : 'w3resource'
        # Expected Result : 'w3ce'
        # Sample String : 'w3'
        # Expected Result : 'w3w3'
        # Sample String : ' w'
        # Expected Result : Empty String

        def remove_ele(input_string):
            if len(input_string) < 2:
                return ''
            else:
                return input_string[0:2] + input_string[-2:]

        print(remove_ele("Dhruvish"))
    ```

## 11. Write a Python program to get a single string from two given strings, separated by a space and swap the first two characters of each string
**Answer:**
    ```python
        # Sample String : 'abc', 'xyz'
        # Expected Result : 'xyc abz'
        def chars_mix_up(a, b):
            new_a = b[:2] + a[2:]
            new_b = a[:2] + b[2:]

            return new_a + ' ' + new_b

        print(chars_mix_up('abc', 'xyz'))
    ```

## 12. Write a Python program to add 'ing' at the end of a given string (length should be at least 3). If the given string already ends with 'ing', add 'ly' instead. If the string length of the given string is less than 3, leave it unchanged
**Answer:**
    ```python
        # Sample String : 'abc'
        # Expected Result : 'abcing'
        # Sample String : 'string'
        # Expected Result : 'stringly'

        def get_respone(input_result):
            if input_result[-3:] == 'ing':
                input_result += 'ly'
            else:
                input_result += 'ing'

            return input_result

        print(get_respone('abc'))
    ```

## 13. Removes the character at the specified index from the input string
**Answer:**
    ```python
        def string_length(input_result,n):
            first_char = input_result[:n]
            last_char = input_result[n+1:]

            return first_char + last_char

        print(string_length("Dhruvish",2))
    ```

## 14. Write a Python program to change a given string to a newly string where the first and last chars have been exchanged
**Answer:**
    ```python
        def swap_alpha(input_result):
        
            return input_result[-1] + input_result[1:-1] + input_result[:1]
        
        print(swap_alpha("Dhruvish"))
    ```

## 15. Write a Python program to remove characters that have odd index values in a given string
**Answer:**
    ```python
        def remove_odd(input_result):
            new_string = ''
            for i in range(len(input_result)):
                if i % 2 == 0:
                    new_string += input_result[i]

            return new_string

        print(remove_odd("Dhruvish"))
    ```