// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// O(n^2)
export function maxContinuous1ListFun1(arr) {
    let max = 0;
    let start = 0;
    let end = 0;
    for (let i = 0; i < arr.length; ++i) {
        let sum = 0;
        for (let j = i; j < arr.length; ++j) {
            sum += arr[j];
            if (sum > max) {
                start = i;
                end = j;
            }
            max = Math.max(sum, max);
        }
    }
    return {
        max,
        start,
        end,
    };
    // console.log('最大和', max, start, end);
    // console.log('连续数组为：', arr.slice(start, end + 1));
}
// O(n)
export function maxContinuous1ListFun2(arr) {
    let sum = arr[0];
    let dp = arr[0];
    let start = 0;
    let end = 0;
    for (let i = 1; i < arr.length; ++i) {
        if (dp + arr[i] < arr[i]) {
            // 往后再加的数只能使当前的和序列变小，所以此刻的值应为起始值
            start = i;
        }
        dp = Math.max(dp + arr[i], arr[i]);
        if (dp >= sum) {
            // 往后加的和没有最大和大了，序列终止
            end = i;
        }
        sum = Math.max(dp, sum);
    }
    // console.log('最大和', sum, start, end);
    // console.log('连续数组为：', arr.slice(start, end + 1));
    return {
        sum,
        start,
        end,
    };
}

export function maxStoredWater(arr) {
    // 两边的元素不具备积雨作用
    const len = arr.length;
    let leftMax = [0];
    let rightMax = [];
    rightMax[len - 1] = 0;
    let sum = 0;
    for (let i = 1; i < len - 1; ++i) {
        leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
    }
    for (let i = len - 2; i > 0; --i) {
        rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
    }

    for (let i = 1; i < len - 1; ++i) {
        sum += Math.max((Math.min(leftMax[i], rightMax[i]) - arr[i]), 0);
    }
    // 求和
    // [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    console.log('最大积雨量为', sum);
    return sum;
}

export function intToRoman(num) {
    const translate = (m, one, five, ten) => {
        if (m !== 0) {
            if (m < 4) {
                return one.repeat(m);
            }
            if (m === 4) {
                return one + five;
            }
            if (m < 9) {
                return five + one.repeat(m - 5);
            }
            if (m === 9) {
                return one + ten;
            }
        }
        return '';
    };
    return translate(Math.floor(num / 1000), 'M', '', '') + translate(Math.floor(num % 1000 / 100), 'C', 'D', 'M')
    + translate(Math.floor(num % 1000 % 100 / 10), 'X', 'L', 'C') + translate(Math.floor(num % 1000 % 100 % 10), 'I', 'V', 'L');
}
