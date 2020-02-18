require 'byebug'
def max_sub_array(nums)
    # return nums[0] if nums.length == 1
    # max = nums.min
    # nums.each_with_index do |num1,idx1|
    #     nums.each_with_index do |num2,idx2|
    #         sum = nums[idx1..idx2].sum
    #         if max < sum
    #             max = sum
    #         end
    #     end
    # end
    # max
    max =0
    return [[]] if nums.empty?
    subs = max_sub_array(nums[0..-2])
    subs.concat(subs.map{|el| el += [nums.last]})

    # subs.each do |sub|
    #     if max < sub.sum
    #         max = sub.sum
    #     end
    # end
    # max
end

p max_sub_array([-1,-2])
