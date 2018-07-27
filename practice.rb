# def number_of_55s(numbers)
#   count = 0
#   numbers.each do |number|
#     if number == 55
#       count += 1
#     end
#   end
#   count
# end

# p number_of_55s([4, 1, 44, 55, 2, 1, 55, 33])

# def factorial(number)
#   product = 1
#   while number > 0
#     product = product * number
#     number -= 1
#   end
#   return product
# end

# p factorial(5)

def print_sums(numbers1, numbers2)
  result = []
  numbers1.each do |number1|
    numbers2.each do |number2|
      result << number1 + number2
    end
  end
  result
end

p print_sums([1, 5, 10], [100, 500, 1000])
