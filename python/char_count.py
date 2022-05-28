def char_count(str):
  str = str.replace(' ', '')
  result = []
  for char in list(str):
    if not any(char in elem for elem in result):
      result.append([char, 1])
    else:
      for elem in range(0,len(result)):
        if result[elem][0] == char:
          result[elem][1] += 1

  sorted_result = sorted(result, key=lambda x: (-x[1], x[0]))

  #sorted_result = sorted(result, key=sort_result)
  # need to sort nested array by second index
    
  return sorted_result
  

# print(char_count("aaa  bbc"))

# print(char_count("an apple a day will keep the doctor away"))