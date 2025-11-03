class Solution:
    def firstUniqChar(self,s: str) -> int:
        'l': [0,1]
        d = {}
        for idx, ch in enumerate(s):
            if not d.get(ch):
                d[ch] = [idx, 1]
            else:
                d[ch][1] += 1

        for char, val in d.items():
            if val[1] == 1:
                return val[0]
        
        return -1   
