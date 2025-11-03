class Solution: 
    def maximumLength(self, s: str) -> int: 
        l,r = 0,0
        _max = 1 
        counter = {}

        counter[s[0]] = 1

        while r < len(s)-1:
            r += 1 
            if(counter.get(s[r])):
                counter[s[r]] += 1
            else:
                counter[s[r]] = 1
            while counter[s[r]] == 3: 
                counter[s[l]] -= 1
                l += 1
            _max = max(_max, r-l+1)

        return _max


'''
class Solution {
    maximumLength(s) {
        if (!s || s.length === 0) return 0;
        let l = 0, r = 0;
        let _max = 1;
        const counter = {};
        counter[s[0]] = 1;

        while (r < s.length - 1) {
            r++;
            counter[s[r]] = (counter[s[r]] || 0) + 1;
            while (counter[s[r]] === 3) {
                counter[s[l]] -= 1;
                l += 1;
            }
            _max = Math.max(_max, r - l + 1);
        }

        return _max;
    }
}
'''        
