require 'byebug'
def combination_sum(candidates, target)
    result = []
    candidates.each_with_index do |num1,idx1|
        candidates.each_with_index do |num2,idx2|
            debugger
            sub = candidates[idx1..idx2]
            result << sub if sub.sum == target && !sub.empty?
            # result << sub    
        end
    end
    result.uniq
end
p combination_sum([2,3,6,7],7)