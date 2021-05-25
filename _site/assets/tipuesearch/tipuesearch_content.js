var tipuesearch = {"pages": [{
    "title": "[백준 / 1259] 팰린드롬수",
    "text": "날짜: 2021년 5월 24일 소요 시간: 13분 28초 카테고리: 수학 문제 태그: bronze.1, 1259, 파이썬 백준 1259 - 팰린드롬수 입출력 예시 예제 입력 예제 출력 121 yes 1231 no 12421 yes 0   내가 적은 코드 while True: N = input() if N == '0': break for i in range(len(N)//2): if N[i] != N[len(N)-1-i]: print('no') else: print('yes') 풀이 과정 N이 0이 나올 때 까지 이 동작을 계속 반복한다. (여기서 0은 문자열로 선언 해 주어야 한다.) 입력된 N의 길이의 절반만큼 반복하여 앞에서 i번째 숫자와 뒤에서 i번째 숫자가 다르면 ‘no’를 같으면 ‘yes’를 출력한다. 베스트 코드 n=input() while n!='0': if n==n[::-1]: print('yes') else: print('no') n=input() 반성 input으로 입력한 값의 자료형이 문자열이라는 생각을 하지 못해서 코드 수정하는 데 시간이 너무 많이 걸렸다. 이번 문제는 더 쉽게 풀 수 있었는데 내가 생각이 짧아서 문자열을 뒤집는다는 생각을 하지 못하였다.",
    "tags": "baekjoon algorithmpractice",
    "url": "/algorithmpractice/2021/05/24/ap_bj_post1/"
  },{
    "title": "[백준 / 1475] 방 번호",
    "text": "날짜: 2021년 5월 22일 소요 시간: 56분 39초 카테고리: 수학 문제 태그: silver.5, 1475, 파이썬 백준 1475 - 방 번호 입출력 예시 예제 입력 예제 출력 9999 2 내가 적은 코드 N = list(str(input())) Y = [] for i in range(0,9): Y.append(N.count(str(i))) Y[6] = (Y[6] + N.count(str(9)) + 1)//2 print(max(Y)) 풀이 과정 먼저 정수형으로 입력된 값 N을 문자열로 변환시킨 뒤 문자열인 N의 숫자로 된 원소 0 부터 8까지의 개수를 카운트 해서 리스트 Y에 삽입한다. 그랬을 때 Y[i] = '문자열 N에서 숫자 i의 개수'가 된다. 6과 9는 같은 수로 취급하기 위해 9의 개수를 따로 리스트 Y의 6번째 원소(숫자 6의 개수)에 더해준다. 그랬을 때 리스트 Y의 원소의 최대값을 출력하면 된다. 베스트 코드 c=input().count print(max(int(max(map(c,'01234578'))),(c('6')+c('9')+1)//2)) 반성 자료형이 계속 변하게 코드를 짜다보니 자료형이 헷갈려 오류를 많이 내서 시간을 많이 잡아먹었다. 반복문 하나 없이 같은 정답을 출력하는 베스트 코드처럼 시간복잡도를 줄일 수 있도록 노력하면서 코딩해야한다.",
    "tags": "baekjoon algorithmpractice",
    "url": "/algorithmpractice/2021/05/22/ap_bj_post1/"
  },{
    "title": "[프로그래머스 / lv.1] 약수의 합",
    "text": "날짜: 2021년 5월 21일 소요 시간: 3분 37초 카테고리: 수학 문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 약수의 합 입출력 예시 n return 12 28 5 6 내가 적은 코드 def solution(n): sum = 0 for i in range(1,n+1): if n%i == 0: sum += i return sum 풀이 과정 반복문을 통해서 1부터 n까지의 수 중 n을 나누었을 때 나머지가 0이 되는 수들을 sum에 더하여 sum을 출력한다. 베스트 코드 def sumDivisor(num): return sum([i for i in range(1,num+1) if num%i==0]) 반성 이제는 문제 풀이 뿐 아니라 코드를 짧게 만드는 데에도 시간을 투자해야겠다는 생각이 들었다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/21/ap_pg_post3/"
  },{
    "title": "[프로그래머스 / lv.1] x만큼 간격이 있는 n개의 숫자",
    "text": "날짜: 2021년 5월 21일 소요 시간: 3분 6초 카테고리: 인덱싱 태그: 레벨1, 파이썬 코딩테스트 연습 - x만큼 간격이 있는 n개의 숫자 입출력 예시 n x result 2 5 [2,4,6,8,10] 4 3 [4,8,12] -4 2 [-4,-8] 내가 적은 코드 def solution(x, n): answer = [x] for i in range(1,n): answer.append((answer[i-1]+x)) i += 1 return answer 풀이 과정 반복문을 통해서 리스트 원소를 x만큼 간격을 주어 n만큼 반복해서 리스트에 append 해주었다. 베스트 코드 def number_generator(x, n): # 함수를 완성하세요 return [i * x + x for i in range(n)] 반성 창의적으로 코드를 효율적으로 짧게 하기에는 아직 파이썬에 대한 이해도가 낮다는 느낌이 들었다. 파이썬에 대한 공부가 더 필요하다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/21/ap_pg_post2/"
  },{
    "title": "[프로그래머스 / lv.1] 직사각형 별찍기",
    "text": "날짜: 2021년 5월 21일 소요 시간: 1분 5초 카테고리: 인덱싱 태그: 레벨1, 파이썬 코딩테스트 연습 - 직사각형 별찍기 입출력 예시 입력 5 3 출력 *** *** *** 내가 적은 코드 a, b = map(int, input().strip().split(' ')) print((\"*\" * a +\"\\n\") * b) 풀이 과정 for을 써서 풀까 했는데 굳이 어렵게 갈 필요 없는 문제 같아 보여 쉽게 접근했다. 베스트 코드 # 베스트코드라기보단 그냥 다중 for문 정석같은 풀이 a, b = map(int, input().strip().split(' ')) answer='' for i in range(b): for j in range(a): answer+=\"*\" answer+='\\n' print(answer) 반성 모든 컴퓨터공학 학부 전공생들이 1학년 때 푸는 정석같은 문제라 어렵지 않게 풀었다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/21/ap_pg_post1/"
  },{
    "title": "[백준 / 1193] 분수찾기",
    "text": "날짜: 2021년 5월 21일 소요 시간: 26분 18초 카테고리: 수학 문제 태그: Bronze.2, 1193, 파이썬 백준 1193 - 분수찾기 입출력 예시 예제 입력 예제 출력 14 2/4 내가 적은 코드 X = int(input()) k = X count = 1 i = 1 while (k &gt; count): k -= count count += 1 if count%2 == 1: a = count + 1 - k b = k else: a = k b = count + 1 - k print (a,b, sep='/') 풀이 과정 그림의 빨간색 화살표와 같은 순서로 순차적으로 진행되었을 때 X번째 분수를 구하기 위해서 단락을 나누어 count로 저장하였다. (처음 X를 저장한 k는 단락이 넘어갈 때 마다 count만큼 차감된다.) (ex. 14 -&gt; 13 -&gt; 11 -&gt; 8 -&gt; 4) 파란색 박스를 기준으로 잡았을 때 1/1 -&gt; 1/2, 2/1 -&gt; 3/1, 2/2, 1/3 -&gt; … 순서로 출력 된다. 이런식으로 진행되었을 때 몇번째 count의 몇번째 수를 찾아낼 수 있다. (ex. 14번째 수 -&gt; 5번째 단락의 4번째 수) 그림의 화살표와 파란색 박스를 살펴보면 count가 짝수이면 분모(a)가 n부터 1까지 줄어들고, 분자(b)는 1부터 n까지 증가한다. count가 홀수이면 분자(b)는 1부터 n까지 증가하고, 분모(a)가 n부터 1까지 줄어든다. 규칙만 찾아 낸다면 그렇게 어렵지 않은 문제 였다. 베스트 코드 n = int(input()) c = 2 m = 1 while True: if m &lt; n: m += c c += 1 else : if (c % 2) == 0: print(str(1+(m-n))+\"/\"+str((c-1) - (m-n))) break else: print(str((c-1) - (m-n))+\"/\"+str(1+(m-n))) break 반성 그냥 print했다가 분자,/,분모 사이에 공백이 생긴다는 점을 인지하지 못해서 시간을 많이 버렸다.",
    "tags": "baekjoon algorithmpractice",
    "url": "/algorithmpractice/2021/05/21/ap_bj_post2/"
  },{
    "title": "[백준 / 2501] 약수 구하기",
    "text": "날짜: 2021년 5월 21일 소요 시간: 3분 32초 카테고리: 수학 문제 태그: Bronze.2, 2501, 파이썬 백준 2501 - 약수 구하기 입출력 예시 예제 입력 예제 출력 6 3 3 내가 적은 코드 N, K = map(int, input().split(' ')) arr = [] for i in range(1,N+1): if N%i == 0: arr.append(i) if len(arr) &gt;= K: print(arr[K-1]) else: print(0) 풀이 과정 반복문을 활용해서 1부터 N까지의 수들로 N을 나누었을 때 나머지가 0이되는 수들을 arr의 원소로 추가했다. 그리고 K가 arr의 길이보다 길 때는 0을, K가 arr의 길이보다 작을 때 K번째 원소를 출력하게 했다. 베스트 코드 a, b = map(int, input().split()) c = [i for i in range(1, a+1) if a%i==0] print(0 if len(c)&lt;b else c[b-1]) 반성 더 어렵고 복잡한 난이도의 코드로 넘어가기 전 코드를 짧게 줄이는 연습을 해야되겠다고 생각했다.",
    "tags": "baekjoon algorithmpractice",
    "url": "/algorithmpractice/2021/05/21/ap_bj_post1/"
  },{
    "title": "[프로그래머스 / lv.1] 하샤드 수",
    "text": "날짜: 2021년 5월 20일 소요 시간: 13분 20초 카테고리: 인덱싱 태그: 레벨1, 파이썬 코딩테스트 연습 - 하샤드 수 입출력 예시 arr result 10 true 12 true 11 false 13 false 내가 적은 코드 def solution(x): a = str(x) sum = 0 for i in range(0,len(a)): sum += int(a[i]) if x % sum == 0: answer = True else: answer = False return answer 풀이 과정 int형인 x를 string형으로 변환하여 a에 저장한 후 인덱스 슬라이싱으로 각 자리 수의 합을 sum에 저장하고 x를 sum으로 나누는 방식으로 문제를 풀었다. 베스트 코드 def Harshad(n): return n % sum([int(c) for c in str(n)]) == 0 반성 자료형 변환에 익숙치 않아 시간이 오래 걸렸다. 불린 값을 반환할 땐 굳이 변수에 불린을 넣을 필요가 없는데 쓸떼없이 코드만 늘렸다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/20/ap_pg_post4/"
  },{
    "title": "[프로그래머스 / lv.1] 콜라츠 추측",
    "text": "날짜: 2021년 5월 20일 소요 시간: 4분 8초 카테고리: 수학 문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 콜라츠 추측 입출력 예시 n result 6 8 16 4 626331 -1 내가 적은 코드 def solution(num): count = 0 while num &gt; 1: if num%2 == 0: num = num/2 count += 1 else: num = (num*3) + 1 count += 1 if count &gt;= 500: count = -1 return count 풀이 과정 문제 설명을 그대로 코드로 옮겼다. 한국말을 그대로 파이썬으로 옮긴거라 크게 풀이 과정이라고 할 게 없다. 베스트 코드 def collatz(num): for i in range(500): num = num / 2 if num % 2 == 0 else num*3 + 1 if num == 1: return i + 1 return -1 반성 처음부터 while을 썼다면 쉬웠을 텐데 for로 돌리려고 하다가 시간을 많이 잡아먹었다. 문법을 확실하게 익히고 이해하지 못해 벌어진 일인 것 같다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/20/ap_pg_post3/"
  },{
    "title": "[프로그래머스 / lv.1] 최대공약수와 최소공배수",
    "text": "날짜: 2021년 5월 20일 소요 시간: 27분 9초 카테고리: 수학 문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 최대공약수와 최소공배수 입출력 예시 n m return 3 12 [3, 12] 2 5 [1, 10] 내가 적은 코드 def solution(n, m): a = n b = m while b: a, b = b, a%b min = a max = (n/min)*(m/min)*min return [min, max] 풀이 과정 유클리드 호제법을 활용하여 최소공배수를 구했고, 두개의 인자와 최소공배수 사이의 관계를 활용하여 최대공약수를 구했다. 베스트 코드 def gcd(a, b): return b if a % b == 0 else gcd(b, a % b) def lcm(a, b): return int(a * b / gcd(a, b)) def gcdlcm(a, b): answer = [gcd(a,b), lcm(a,b)] return answer 반성 최대공약수와 최소공배수 계산을 모두 해야해서 n과m을 a와 b로 치환해서 계산하였는데, 베스트 코드는 함수를 여러개 만들었다. 로직은 모두 비슷한데 어떤 방식으로 푸는 것이 가장 효율적인지를 알고 코드를 짜는 능력을 기를 필요가 있을 것 같다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/20/ap_pg_post2/"
  },{
    "title": "[프로그래머스 / lv.1] 정수 제곱근 판별",
    "text": "날짜: 2021년 5월 20일 소요 시간: 6분 51초 카테고리: 수학 문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 정수 제곱근 판별 입출력 예시 n return 121 144 3 -1 내가 적은 코드 def solution(n): if (n**(1/2))%1 == 0: return ((n**(1/2)) + 1)**2 else: return -1 풀이 과정 제곱근을 정수 1로 나누었을 때 나머지가 0이면 정수라는 로직으로 접근했다. 베스트 코드 def nextSqure(n): sqrt = n ** (1/2) if sqrt % 1 == 0: return (sqrt + 1) ** 2 return 'no' 반성 처음엔 type으로 문제를 접근 했다가 정수가 나와도 float로 출력되어 오류가 나서 시간을 많이 잡아먹었다. 베스트 코드와 같은 로직으로 접근한 첫 알고리즘 문제 인 것 같다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/20/ap_pg_post1/"
  },{
    "title": "[프로그래머스 / lv.1] 짝수와 홀수",
    "text": "날짜: 2021년 5월 19일 소요 시간: 53초 카테고리: 수학 문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 짝수와 홀수 입출력 예시 nums return 3 “Odd” 2 “Even” 내가 적은 코드 def solution(num): if num%2 == 1: answer = \"Odd\" else: answer = \"Even\" return answer 풀이 과정 num을 2로 나누어 나머지가 1이면 홀수인 Odd출력, 이외는 짝수인 Even을 출력했다. 베스트 코드 def evenOrOdd(num): return \"Even\" if num%2 == 0 else \"Odd\" 반성 난이도 적으로는 제일 쉬운 문제였지만 과연 고민을 덜 하고 풀이 시간을 줄이는 것이 먼저인지, 고민을 좀 더 하더라도 시간복잡도를 줄이는 것이 먼저인지, 고민을 많이 하게 한 문제 인 것 같다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/19/ap_pg_post1/"
  },{
    "title": "[프로그래머스 / lv.1] 행렬의 덧셈",
    "text": "날짜: 2021년 5월 17일 소요 시간: 6분 11초 카테고리: 행렬 태그: 레벨1, 파이썬 코딩테스트 연습 - 행렬의 덧셈 입출력 예시 arr1 arr2 result [[1,2],[2,3]] [[3,4],[5,6]] [[4,6],[7,9]] [[1],[2]] [[3],[4]] [[4],[6]] 내가 적은 코드 import numpy as np def solution(arr1, arr2): answer = np.array(arr1) + np.array(arr2) return answer.tolist() 풀이 과정 행렬의 연산이 가능한 numpy라이브러리를 가져와 문제를 풀었다. 베스트 코드 def sumMatrix(A,B): answer = [[c + d for c, d in zip(a, b)] for a, b in zip(A,B)] return answer 반성 numpy라이브러리를 알고 있어서 가져와 풀긴 했지만 출제자의 의도는 베스트 코드가 아니었을까… 마지막 tolist()를 붙이지 않아 행렬 형태로 답이 출력되는 오류 때문에 시간이 많이 걸렸다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/17/ap_pg_post1/"
  },{
    "title": "[프로그래머스 / lv.1] 핸드폰 번호 가리기",
    "text": "날짜: 2021년 5월 16일 소요 시간: 15분 5초 카테고리: 인덱싱 태그: 레벨1, 파이썬 코딩테스트 연습 - 핸드폰 번호 가리기 입출력 예시 phone_number return “01033334444” “***4444” “027778888” “*****8888” 내가 적은 코드 def solution(phone_number): answer = \"*\"*(len(phone_number)-4)+phone_number[len(phone_number)-4:] return answer 풀이 과정 phone_number의 길이 -4의 개수만큼 문자열*을 출력하고 phone_number의 길이 -4 부터 끝까지의 문자열을 슬라이싱하여 뒤에 붙였다. 베스트 코드 def hide_numbers(s): return \"*\"*(len(s)-4) + s[-4:] 반성 이전에 다른 곳에서 한 번 풀어 본 문제라서 대략적인 알고리즘은 기억이 났다. 자료형에 대한 이해도가 낮아서 문자열을 컴파일 하는 단계에서 자꾸 오류가 나서 시간이 오래걸렸다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/16/ap_pg_post4/"
  },{
    "title": "[프로그래머스 / lv.1] 2016년",
    "text": "날짜: 2021년 5월 16일 소요 시간: 1분 28초 카테고리: 수학문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 2016년 입출력 예시 a b result 5 24 “TUE” 내가 적은 코드 import datetime def solution(a, b): days = ['MON','TUE','WED','THU','FRI','SAT','SUN'] answer = days[datetime.date(2016,a,b).weekday()] return answer 풀이 과정 datetime 라이브러리를 가져와서 2016년 a월 b일의 요일을 출력했다. 베스트 코드 def getDayName(a,b): months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'] return days[(sum(months[:a-1])+b-1)%7] 반성 코드를 짧게하기 위해 datetime 모듈을 들고왔다. 모듈을 굳이 들고오지않아도 수식으로 나와 시간복의 코드를 짠 사람이 있었다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/16/ap_pg_post3/"
  },{
    "title": "[프로그래머스 / lv.1] 평균 구하기",
    "text": "날짜: 2021년 5월 16일 소요 시간: 7분 34초 카테고리: 수학문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 평균 구하기 입출력 예시 arr return [1,2,3,4] [2.5] [5,5] [5] 내가 적은 코드 def solution(arr): k = 0 for i in range(0,len(arr)): k += arr[i] answer = k / len(arr) return answer 풀이 과정 arr안의 원소들을 반복문을 모두 더한 다음 arr의 길이만큼 나누었다. 베스트 코드 def average(list): return (sum(list) / len(list)) 반성 sum 함수를 기억해내지 못해 쓸떼 없는 반복문을 썼다. 그리 어렵지 않은 문제를 어렵게 접근하려 했다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/16/ap_pg_post2/"
  },{
    "title": "[프로그래머스 / lv.1] 제일 작은 수 제거하기",
    "text": "날짜: 2021년 5월 16일 소요 시간: 21분 56초 카테고리: 수학문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 제일 작은 수 제거하기 입출력 예시 arr return [4,3,2,1] [4,3,2] [10] [-1] 내가 적은 코드 def solution(arr): k = arr[0] if len(arr) == 1: arr[0] = -1 else: for i in range(1,len(arr)): if k &gt; arr[i]: k = arr[i] i += 1 arr.remove(k) answer = arr return answer 풀이 과정 arr안의 원소들을 차례로 비교하며 가장 작은 수를 찾아 내서 remove함수로 지우도록 만들었다. 정렬 알고리즘과 가깝게 풀려고 했었던 것 같다. 베스트 코드 def rm_small(mylist): return [i for i in mylist if i &gt; min(mylist)] or [-1] 내 생각에 가장 직관적인 코드 def rm_small(mylist): mylist.remove(min(mylist)) return mylist # 빈 리스트와 리스트 원소가 1개일 때는 고려하지 않은 코드 반성 min(array[]) 함수를 알지 못해 코드가 길어졌다. 사실은 반복을 쓸 필요도 없는 문제였다. 리스트 안에 반복문 조건문을 삽입 할 수 있다는 점을 몰랐다. 함수의 활용 등의 전반적인 파이썬 언어에 대한 이해도를 높일 필요가 있다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/16/ap_pg_post1/"
  },{
    "title": "[프로그래머스 / lv.1] 약수의 개수와 덧셈",
    "text": "날짜: 2021년 5월 15일 소요 시간: 30분 21초 카테고리: 수학 태그: 레벨1, 파이썬 코딩테스트 연습 - 약수의 개수와 덧셈 입출력 예시 left right result 13 17 43 24 27 52 내가 적은 코드 def solution(left, right): answer = 0 for num in range(left,right+1): measure_count = 0 for measure_check in range(1,num+1): if num % measure_check == 0: measure_count += 1 if measure_count % 2 == 0: answer += num else: answer -= num return answer 풀이 과정 left에서 right까지의 수를 반복문을 활용해서 하나씩 약수의 개수를 체크했다. 1부터 num까지 차례차례 num을 나누었을 때 나머지가 0이 되면 measure_count를 1 증가시켜 measure_count를 2로 나눈 나머지를 통해 약수의 개수가 짝수개인지 홀수개인지를 판별했다. 베스트 코드 def solution(left, right): answer = 0 for i in range(left,right+1): if int(i**0.5)==i**0.5: answer -= i else: answer += i return answer 반성 알고리즘 문제를 많이 풀지 않아서 익숙하지 않은 탓인지 기본적인 수학문제임에도 시간을 많이 썼다. range(a,b)의 이해도가 낮아 +1을 놓쳐 해맸다. 베스트 코드 짜는 애들은 약수의 개수가 홀수개면 0.5제곱하면 정수로 떨어진다는 걸 어떻게 생각을 해내지…",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/15/ap_pg_post2/"
  },{
    "title": "[프로그래머스 / lv.1] 가운데 글자 가져오기",
    "text": "날짜: 2021년 5월 15일 소요 시간: 5분 48초 카테고리: 인덱싱 태그: 레벨1, 파이썬 코딩테스트 연습 - 가운데 글자 가져오기 입출력 예시 s return “abcde” “c” “qwer” “we” 내가 적은 코드 def solution(s): half_s = len(s)//2 if len(s)%2 == 1: answer = s[half_s] else: answer = s[half_s-1:half_s+1] return answer 풀이 과정 s 길이를 반으로 나누었을 때 나머지가 1이면(문자열의 길이가 홀수이면) ‘길이의 반’번째 있는 문자(하나)를 가져왔고 나머지가 0이면(문자열의 길이가 짝수이면) ‘길이의 반-1’~’길이의 반’번째 있는 문자(둘)를 가져왔다. 베스트 코드 def string_middle(str): return str[(len(str)-1)//2:len(str)//2+1] 반성 인덱스 슬라이싱의 개념을 확실하게 잡지 못해 s[a:b] 부분을 헷갈려서 시간이 많이 소요되었다. 사실 다시 코드 짜라고 해도 베스트 코드는 생각 못해낼 것 같긴하다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/15/ap_pg_post1/"
  },{
    "title": "[프로그래머스 / lv.1] 폰켓몬",
    "text": "날짜: 2021년 5월 5일 소요 시간: 10분 32초 카테고리: 배열, 인덱스 태그: 레벨1, 파이썬 코딩테스트 연습 - 폰켓몬 입출력 예시 nums result [3,1,2,3] 2 [3,3,3,2,2,4] 3 [3,3,3,2,2,2] 2 내가 적은 코드 def solution(nums): array = [] for x in nums: if x not in array: array.append(x) else: continue if len(nums)/2 &lt; len(array): answer = len(nums)/2 else: answer = len(array) return answer 풀이 과정 nums안의 중복되지 않은 원소 찾기위해 for문을 돌려 새로운 배열을 만들어 그 곳에 원소를 저장하였고 남은 폰켓몬의 길이가 N/2마리의 폰켓몬 보다 크면 가질 수 있는 폰켓몬의 수가 정답이고, 반대이면 array의 길이가 정답이다. 베스트 코드 def solution(ls): return min(len(ls)/2, len(set(ls))) 반성 set()에 대한 이해도가 낮아서 굳이 for과 if를 하나 더 넣어서 복잡도를 높였다. return값이 굳이 answer이 아니어도 된다는 것을 깨달았다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/05/ap_pg_post1/"
  }]};
