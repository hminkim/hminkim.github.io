var tipuesearch = {"pages": [{
    "title": "Linked List",
    "text": "Singly Linked List 단일 연결 리스트 순차적으로 연결된 공간에 데이터를 나열하는 배열과 달리 링크드 리스트는 떨어진 곳에 존재하는 데이터를 연결해서 관리하는 데이터 구조 파이썬은 리스트 타입이 링크드 리스트의 기능을 모두 지원해 줌 Node = key + link 노드(Node) 데이터 저장 단위 (데이터값, 포인터) 로 구성 포인터(pointer) 각 노드 안에서, 다음이나 이전의 노드와의 연결 정보를 가지고 있는 공간 출처 : https://en.wikipedia.org/wiki/Linked_list 일반적인 단일 연결 리스트의 형태 class Node: def __init__(self, data): self.data = data self.next = None class SinglyLinkedList: def __init__(self, data): self.head = Node(data) def add(self, data): if self.head == '': self.head = Node(data) else: node = self.head while node.next: node = node.next node.next = Node(data) def desc(self): node = self.head while node: print (node.data) node = node.next def delete(self, data): if self.head == '': print ('해당 값을 가진 노드 없음') return # 경우의 수1: self.head를 삭제해야할 경우 -&gt; self.head를 바꾼 뒤 삭제 if self.head.data == data: temp = self.head self.head = self.head.next del temp else: node = self.head # 경우의 수2: self.head가 아닌 노드를 삭제해야할 경우 while node.next: if node.next.data == data: temp = node.next node.next = node.next.next del temp pass else: node = node.next def search_node(self, data): node = self.head while node: if node.data == data: return node else: node = node.next 단순 연결 리스트 메소드 구현 장점 미리 데이터 공간을 할당 해야 하는 배열과 달리 데이터 공간을 미리 할당하지 않아도 됨 단점 연결을 위한 별도 데이터 공간이 필요하므로 저장 공간 효율이 높지 않음 데이터를 찾는 시간이 필요하므로 접근 속도가 느림 중간 데이터 삭제 시, 앞뒤 데이터의 연결을 재구성해야 하는 부가적인 작업 필요 Doubly Linked List 이중 연결 리스트 양방향으로 연결되어 있어서 노드 탐색이 양쪽으로 모두 가능 단순연결리스트와는 다르게 상수시간 내 역방향 연산이 가능 Node = key + next_link + prev_link 출처 : https://en.wikipedia.org/wiki/Linked_list 이중 연결 리스트의 형태 class Node: def __init__(self, data, prev=None, next=None): self.prev = prev self.data = data self.next = next class DoublyLinkedList: def __init__(self, data): self.head = Node(data) self.tail = self.head def insert_before(self, data, before_data): if self.head == None: self.head = Node(data) return True else: node = self.tail while node.data != before_data: node = node.prev if node == None: return False new = Node(data) before_new = node.prev before_new.next = new new.next = node return True def insert_after(self, data, after_data): if self.head == None: self.head = Node(data) return True else: node = self.head while node.data != after_data: node = node.next if node == None: return False new = Node(data) after_new = node.next new.next = after_new new.prev = node node.next = new if new.next == None: self.tail = new return True def insert(self, data): if self.head == None: self.head = Node(data) else: node = self.head while node.next: node = node.next new = Node(data) node.next = new new.prev = node self.tail = new def desc(self): node = self.head while node: print (node.data) node = node.next 이중 연결 리스트 메소드 구현 Circular Linked List 원형 연결 리스트 양방향으로 연결되어 있어서 노드 탐색이 양쪽으로 모두 가능 단순연결리스트와는 다르게 상수시간 내 역방향 연산이 가능 출처 : https://en.wikipedia.org/wiki/Linked_list 원형 연결 리스트의 형태 참고 위키피디아 잔재미코딩 신찬수 교수님 유튜브",
    "tags": "datastructure computerscience",
    "url": "/computerscience/2021/06/09/cs_ds_01/"
  },{
    "title": "[프로그래머스 / lv.1] 예산",
    "text": "날짜: 2021년 6월 7일 소요 시간: 6분 11초 카테고리: 수학문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 예산 입출력 예시 d budget result [1,3,2,5,4] 9 3 [2,2,3,3] 10 4 내가 적은 코드 def solution(d, budget): d.sort() count = 0 bud = 0 for i in d: bud += i if bud &gt; budget: break count += 1 return count 풀이 과정 신청한 부서 d를 내림차순으로 정렬하여 하나하나씩 더해 주어 bud에 저장 한 후 저장 한 부서만큼 count에 +1씩 해준다. bud가 예산을 나타내는 파라미터인 budget보다 커지게 될 경우 반복을 멈추고 count를 리턴한다. 베스트 코드 def solution(d, budget): d.sort() while budget &lt; sum(d): d.pop() return len(d) 신청한 부서 d가 많고 예산 budget이 적으면 리스트 뒤에서 부터 pop하며 읽어내려가기 때문에 비효율적인 코드가 될 수도 있다. 반성 어렵게 생각할 필요가 없던 문제인데 6분이나 소비하였다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/06/07/ap_pg_post1/"
  },{
    "title": "Stack &amp; Queue &amp; Deque",
    "text": "제한된 접근(삽입, 삭제)만 허용 (Stack, Queue, Dequeue 모두 동일) 출처 : https://gohighbrow.com/stacks-and-queues/ 스택과 큐의 구조를 가장 잘 보여주는 예시 Stack 스택 class Stack: def __init__(self): self.items = []. #데이터 저장을 위한 리스트 준비 def push(self, val): self.items.append(val) def pop(self): try: return self.items.pop() #pop할 item이 없으면 except IndexError: print(\"Stack is empty\") #indexError 발생 def top(self): try: return self.items[-1] except IndexError: print(\"Stack is empty\") def __len__(self): return len(self.items) #len()로 호출하면 Stack의 item 수 반환 파이썬에서 스택은 범용 자료구조인 List를 활용하여 사용할 수 있다. 특징 LIFO : Last In First Out 가장 최근에 push된 요소가 먼저 pop된다 (후입선출) append → push pop → pop 활용 예시 웹 브라우저 뒤로 가기 : 가장 최근에 열린 페이지부터 다시 보여줌 실행 취소 (Ctrl + Z) : 가장 나중에 실행된 작업을 되돌려줌 Queue 큐 class Queue: def __init__(self): self.items = [] #빈 리스트 self.front_index = 0 def enqueue(self, val): self.item.append(val) def dequeue(self): if self.front_index == len(self.items): print(\"Queue is empty\") return None else: x = self.items[front_index] self.front_index += 1 return x List를 활용해서 큐를 사용할 수 있는 클래스를 만들 수도 있다. from queue import Queue que = Queue() que.put(val) que.get() 파이썬에 내장되어 있는 queue 모듈을 활용하여 보다 쉽게 코드를 작성할 수 있다. 특징 FIFO : First In First Out enqueue된 순서대로 dequeue된다 (선입선출) front에서 dequeue되고 Rear에서 enqueue된다. append → enqueue → put pop → dequeue → get queue 모듈의 Queue 클래스에 대한 자세한 내용은 여기 파이썬 공식 레퍼런스 참고 활용 예시 은행 번호표 : 가장 먼저 온 사람의 번호를 먼저 띄워 줌 프린터 인쇄 대기열 : 우선 순위가 같은 작업 중 가장 먼저 들어 온 문서부터 인쇄함 Dequeue (double-end-queue) 덱 from collections import deque makeDeque() #덱 생성 appendleft() #맨 앞(왼쪽)에 자료 추가 pop() #맨 앞(왼쪽)에 자료 삭제 append() #맨 뒤(오른쪽)에 자료 추가 popleft() #맨 뒤(오른쪽)에 자료 삭제deque(maxlen=n) reverse() #deque의 순서 뒤집음 count(x) #deque에 포함된 x의 개수 반환 clear() #deque 값 모두 삭제 덱은 collections 모듈의 deque 클래스를 활용하면 보다 쉽게 코드를 작성할 수 있다. 특징 Stack과 Queue를 합친 형태 양쪽 끝에서 삽입과 삭제가 모두 가능한 자료구조 list와 deque 비교 시간 복잡도 insert, remove, popleft indexing, slicing list O(n) O(1) deque O(n) O(n) 고정된 길이 내에서 접근, 검색, 슬라이싱을 하는 데에는 list가 유리 데이터를 추가 or 삭제할 땐 deque이 유리 ###참고 신찬수 교수님 유튜브",
    "tags": "datastructure computerscience",
    "url": "/computerscience/2021/06/05/cs_ds_01/"
  },{
    "title": "[프로그래머스 / lv.2] 124 나라의 숫자",
    "text": "날짜: 2021년 6월 4일 소요 시간: 1시간 10분 48초 카테고리: 수학문제 태그: 레벨2, 파이썬 코딩테스트 연습 - 124 나라의 숫자 입출력 예시 10진법 124 나라 10진법 124 나라 1 1 6 14 2 2 7 21 3 4 8 22 4 11 9 24 5 12 10 41 내가 적은 코드 def solution(n): arr = [] while n != 0: n -= 1 i = n % 3 arr.append('124'[i]) n //= 3 return \"\".join(arr[::-1]) 풀이 과정 3진법 만드는 로직과 비슷하게 작동하나 1의 자리 수가 0이 없다는 점을 감안해서 n-1을 하여 풀어줘야 한다. 0 대신 1 / 1 대신 2 / 2 대신 4 이렇게 들어가게끔 문자열 인덱싱을 해 주었고, 리스트에 append해서 마지막에 거꾸로 뒤집은 리스트를 join함수로 문자열화 시켰다. 사실 그냥 처음부터 문자열로 풀었으면 훨씬 간단했을 코드이다. 베스트 코드 # 베스트 코드 1 def change124(n): num = ['1','2','4'] answer = \"\" while n &gt; 0: n -= 1 answer = num[n % 3] + answer n //= 3 return answer 나와 같은 방식으로 풀었으나 나는 리스트로 풀었고 이 분은 문자열으로 풀었다. 문자열이 좀더 효율적인 것 같긴 하다. 대신 이 분은 1,2,4를 리스트에 넣어서 인덱싱 해줘서 나와 반대로 바보같은 짓을 했다. # 베스트 코드 2 def change124(n): if n&lt;=3: return '124'[n-1] else: q, r = divmod(n-1, 3) return change124(q) + '124'[r] 재귀함수로 풀어 훨씬 깔끔해진 코드. 재귀함수도 익숙해 질 필요가 있을 것 같다. 반성 로직을 생각해 내는데 너무 많은 시간을 허비하였다. 말이 level.2 이지 사실 로직이 조금 복잡한 1정도 수준의 문제였다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/06/04/ap_pg_post2/"
  },{
    "title": "[프로그래머스 / lv.1] 3진법 뒤집기",
    "text": "날짜: 2021년 6월 4일 소요 시간: 16분 16초 카테고리: 인덱싱 태그: 레벨1, 파이썬 코딩테스트 연습 - 3진법 뒤집기 입출력 예시 n return 45 7 125 229 내가 적은 코드 def solution(n): answer = 0 num = [] while n != 0: m = n % 3 n = n // 3 num.append(m) num = num[::-1] for i in range(0,len(num)): answer += num[i] * (3**i) return answer 풀이 과정 정수형 n을 0이 될 때까지 나눈 나머지를 num에 저장한다. (기본적인 진수 변환 법) 그리고 num의 원소를 거꾸로 뒤집은 각 원소를 3의 i승씩 곱해준다. 베스트 코드 def solution(n): tmp = '' while n: tmp += str(n % 3) n = n // 3 answer = int(tmp, 3) return answer 반성 문자열 인덱싱을 통하지 않고 바로 정수형으로 풀 수 있는 문제였다. 좀 더 머리를 굴렸으면 보다 빠른 코드를 짤 수 있었다. int()함수를 통해 진법을 바꿀 수 있다는 사실을 알았다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/06/04/ap_pg_post1/"
  },{
    "title": "[프로그래머스 / lv.1] 문자열 내 마음대로 정렬하기",
    "text": "날짜: 2021년 6월 3일 소요 시간: 2시간 초과 카테고리: 인덱싱 태그: 레벨1, 파이썬,time_out 코딩테스트 연습 - 문자열 내 마음대로 정렬하기 입출력 예시 strings n return [“sun”, “bed”, “car”] 1 [“car”, “bed”, “sun”] [“abce”, “abcd”, “cdx”] 2 [“abcd”, “abce”, “cdx”] 내가 적은 코드 # 문제를 풀지 못하였다. 풀이 과정 문제를 풀지 못하였다. 베스트 코드 def solution(strings, n): return sorted(strings, key=lambda x: x[n]) 반성 sort 함수에 key 값을 넣어 정렬하는 것과, lambda의 이해도가 낮아서 이런 풀이를 생각조차 하지 못했다. 3중 반복문으로 어떻게든 풀어보려했었던 내가 자괴감이든다….",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/06/03/ap_pg_post2/"
  },{
    "title": "[프로그래머스 / lv.1] 이상한 문자 만들기",
    "text": "날짜: 2021년 6월 3일 소요 시간: 23분 09초 카테고리: 인덱싱 태그: 레벨1, 파이썬 코딩테스트 연습 - 이상한 문자 만들기 입출력 예시 s return “try hello world” “TrY HeLlO WoRlD” 내가 적은 코드 def solution(str): answer = [] i = 0 j = 0 for i in range(0,len(str)): if j % 2 == 0: answer.append(str[i].upper()) j += 1 else: answer.append(str[i].lower()) j += 1 if str[i] == ' ': j = 0 return ''.join(answer) 풀이 과정 str의 문자열을 하나씩 슬라이싱해서 띄어쓰기를 기준으로 짝수번 문자는 대문자, 홀수번 문자는 소문자로 배열 answer에 저장한다. 띄어쓰기를 기준으로 j를 0으로 초기화하여 기준을 잡고 대소문자를 구분 할 짝,홀수번째 문자를 정한다. 그리고 배열 answer의 원소들을 join() 함수를 통해 하나의 문자열로 출력한다. 베스트 코드 def toWeirdCase(s): # 함수를 완성하세요 return ' '.join([''.join([c.upper() if i % 2 == 0 else c.lower() for i, c in enumerate(w)]) for w in s.split()]) 반성 알고리즘 책에서 enumerate()함수에 대해 보기는 했으나 실제로 사용되는 경우는 처음봤다. 다양한 함수, 모듈들이 더 눈에 익어 직접 활용할 수 있게 만들어야한다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/06/03/ap_pg_post1/"
  },{
    "title": "[프로그래머스 / lv.1] 수박수박수박수박수박수?",
    "text": "날짜: 2021년 6월 1일 소요 시간: 05분 03초 카테고리: 인덱싱 태그: 레벨1, 파이썬 코딩테스트 연습 - 수박수박수박수박수박수? 입출력 예시 n return 3 “수박수” 4 “수박수박” 내가 적은 코드 def solution(n): watermelon = [\"수\"] for i in range(0,n-1): if watermelon[i] == \"수\": watermelon.append(\"박\") else: watermelon.append(\"수\") return \"\".join(watermelon) 풀이 과정 문자열의 이전 원소가 “수”일 경우 다음 원소로 “박”을 추가하고 이전 원소가 “박”일 경우 다음 원소로 “수”를 추가하는 동작을 n번 반복한다. 베스트 코드 def water_melon(n): return \"수박\"*(n//2) + \"수\"*(n%2) 반성 O(1)으로 짤 수 있는 코드를 O(n)로 짰다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/06/01/ap_pg_post1/"
  },{
    "title": "[프로그래머스 / lv.1] 시저 암호",
    "text": "날짜: 2021년 5월 31일 소요 시간: 33분 39초 카테고리: 수학 문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 시저 암호 입출력 예시 s n result “AB” 1 “BC” “z” 1 “a” “a B z” 4 “e F d” 내가 적은 코드 def solution(s, n): alphabet = 'abcdefghijklmnopqrstuvwxyz' answer = list() for i in range(0,len(s)): if s[i].isupper(): for j in range(0, len(alphabet)): if s[i] == alphabet[j].upper(): answer.append(alhpabet[(j+n)%26].upper()) break if s[i].islower(): for k in range(0, len(alphabet)): if s[i] == alphabet[k]: answer.append(alphabet[(k+n)%26]) break if s[i] == \" \": answer.append(\" \") return \"\".join(answer) 풀이 과정 문자열 s의 원소가 대문자인 경우 (첫번째 조건) 알파벳 소문자로 이루어진 문자열 alphabet을 대문자화 하여 answer에 저장 문자열 s의 원소가 소문자인 경우 (두번째 조건) 알파벳 소문자로 이루어진 문자열 alphabet을 answer에 저장 문자열 s의 원소가 공백인 경우 (세번째 조건) 공백을 answer에 저장 n번째 원소가 26번째(z번쨰보다 큰 수)일 경우 26으로 나눈 나머지 번째의 원소(다시 a로 돌아감)를 출력 리스트 형인 answer에 저장 되어있는 원소를 문자형으로 출력하기 위해 join()함수를 사용 베스트 코드 def caesar(s, n): s = list(s) for i in range(len(s)): if s[i].isupper(): s[i]=chr((ord(s[i])-ord('A')+ n)%26+ord('A')) elif s[i].islower(): s[i]=chr((ord(s[i])-ord('a')+ n)%26+ord('a')) return \"\".join(s) 반성 시프트로 푸는 방법을 생각은 했으나 ord()와 chr()함수를 몰라서 코드화 할 수 없었다. 더 많은 파이썬 모듈이나 함수를 알면 더 효율적으로 코드를 짤 수 있다. 파이썬에 대한 공부가 더 필요하다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/31/ap_pg_post2/"
  },{
    "title": "[프로그래머스 / lv.1] 문자열 내 p와 y의 개수",
    "text": "날짜: 2021년 5월 31일 소요 시간: 05분 02초 카테고리: 수학 문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 문자열 내 p와 y의 개수 입출력 예시 s answer “pPoooyY” true “Pyy” false 내가 적은 코드 def solution(s): p_word = 0 y_word = 0 answer = False for i in range(0,len(s)): if s[i] == \"p\" or s[i] == \"P\": p_word += 1 elif s[i] == \"y\" or s[i] == \"Y\": y_word += 1 if p_word == y_word: answer = True return answer 풀이 과정 문자열 s의 길이만큼 반복하여 p나 P가 나오면 p_word에 1씩 더해주고 y나 Y가 나오면 y_word에 1씩 더해주어 p_word와 y_word를 비교하여 boolen 값을 출력한다. 베스트 코드 def numPY(s): return s.lower().count('p') == s.lower().count('y') 반성 더 많은 파이썬 모듈이나 함수를 알면 더 효율적으로 코드를 짤 수 있다. 파이썬에 대한 공부가 더 필요하다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/31/ap_pg_post1-%EB%B3%B5%EC%82%AC%EB%B3%B8/"
  },{
    "title": "[백준 / 1158] 요세푸스 문제",
    "text": "날짜: 2021년 5월 31일 소요 시간: 1시간 42분 12초 카테고리: 자료구조, 큐 태그: silver.5, 1158 , 파이썬 백준 1158 - 요세푸스 문제 입출력 예시 예제 입력 예제 출력 7 3 &lt;3, 6, 2, 7, 5, 1, 4&gt; 내가 적은 코드 N,K = map(int, input().split()) T = 0 que = [] arr = [i for i in range(1,N+1)] while len(arr) != 0: T = (T + K-1) % len(arr) que.append(arr[T]) arr.pop(T) N -= 1 print('&lt;' + ', '.join(map(str,que)) + '&gt;') # 나름 큐로 풀어보겠다고 풀었던 코드 N,K = map(int, input().split()) que = [] arr = [i for i in range(1,N+1)] while len(arr) != 0: i = 1 while i &lt; K: arr.append(arr[0]) arr.pop(0) i += 1 que.append(arr[0]) arr.pop(0) print('&lt;' + ', '.join(map(str,que)) + '&gt;') 풀이 과정 사실 반복문을 통해 한바퀴 돌 때 마다 제거하는 방식보다 큐를 활용하여 한번 풀어보려 했으나 파이썬에서 (내 나름대로 한번) 큐를 구현해서 실행시켰더니 시간 초과가 났다. 반복을 통해 + K-1) % len(arr) 번째씩 더해가며 원소를 pop하고 그 원소를 que에 저장했다. 베스트 코드 n, m = map(int, input().split()) l = list(range(1, n + 1)) r = [] index = 0 while l: index = (index + m - 1) % len(l) r.append(str(l.pop(index))) print('&lt;', ', '.join(r), '&gt;', sep='') 반성 알고리즘 적으로 베스트 코드와 다르지 않았다는 점에서 실력이 늘어감을 느낀다. 시간 복잡도를 줄인 큐를 통해 풀 수 있는 방법을 찾지 못하였다.",
    "tags": "baekjoon algorithmpractice",
    "url": "/algorithmpractice/2021/05/31/ap_bj_post1/"
  },{
    "title": "[프로그래머스 / lv.1] 크레인 인형뽑기 게임",
    "text": "날짜: 2021년 5월 30일 소요 시간: 58분 24초 카테고리: 수학 문제 태그: 레벨1, 파이썬 코딩테스트 연습 - 크레인 인형뽑기 게임 입출력 예시 board moves result [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]] [1,5,3,5,1,2,1,4] 4 내가 적은 코드 def solution(board, moves): arr = [] answer = 0 for i in moves: for j in range(len(board)): if board[j][i-1] != 0: arr.append(board[j][i-1]) board[j][i-1] = 0 if len(arr) &gt; 1 and arr[-1] == arr[-2]: arr.pop(-1) arr.pop(-1) answer += 2 break return answer 풀이 과정 i는 크레인이 움직인 행을 의미한다.(배열의 첫번째가 0으로 시작하므로 -1을 해준다.) j는 board의 열을 의미한다. 그래서 0이 아닌 그러니까 인형이 존재하는 칸을 만났을 때 그 원소를 0으로 치환하고 그 값은 arr에 담는다. 만약 arr의 맨 뒤의 두 원소가 같을 때 두 개의 원소를 pop하고 결과 값에 2를 더한다. 그럼 마지막에는 사라진 인형의 개수가 answer에 저장된다. 베스트 코드 def solution(board, moves): stacklist = [] answer = 0 for i in moves: for j in range(len(board)): if board[j][i-1] != 0: stacklist.append(board[j][i-1]) board[j][i-1] = 0 if len(stacklist) &gt; 1: if stacklist[-1] == stacklist[-2]: stacklist.pop(-1) stacklist.pop(-1) answer += 2 break return answer 반성 이제 레벨 1정도의 브루트 포스 알고리즘의 로직은 어느정도 구현할 수 있는 것 같다. 구현 단계에서 파이썬의 기본적인 문법에 대한 이해도가 낮아서 리스트 슬라이싱이라던지 자료형이라던지에서의 실수가 잦다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/30/ap_pg_post1-%EB%B3%B5%EC%82%AC%EB%B3%B8/"
  },{
    "title": "Array &amp; List",
    "text": "Array 배열 특징 연속된 메모리 공간에 할당 무작위 접근(Random Access) 가능 정적 배열 지역성을 가짐 탐색에 효율적 C의 Array Java의 Array 장점 인덱스를 통한 검색에 빠른 성능을 보여줌 연속적 메모리 공간에 할당되어 순차 접근도 빠름 단점 한 데이터를 삭제 하더라도 처음 할당 된 사이즈만큼 데이터가 없더라도 메모리를 차지하고 있어서 메모리 재사용이 불가능 정적이므로 배열의 크기를 정해주어야 함 삽입 삭제 시 요소들을 이동해야 해서 비효율적 선언시 지정한 배열의 크기를 변동 불가 List 리스트 특징 불연속 적으로 메모리 공간을 할당 포인터를 통한 접근 동적 배열 추가, 삭제에 효율적 Python의 List Java의 ArrayList 장점 삽입 삭제 시 전후 노드의 참조 관계만 수정하면 되어 효율적 동적이므로 크기가 정해져 있지 않음 메모리의 재사용 가능 포인터를 통한 접근 불연속적이므로 메모리 관리의 편리 단점 검색이 비효율적 포인터를 통해 다음 데이터의 위치를 가르키고 있어 추가적인 메모리 공간 발생 Array (배열) 저장할 데이터의 크기가 정해져 있고, 추가적인 삽입 삭제가 적고, 특정 위치의 데이터를 조회하는 작업이 많다면 유리 List (리스트) 저장할 데이터의 개수가 미정이고, 삽입 삭제가 많이 일어나며, 특정 위치의 데이터를 조회하는 경우가 별로 없다면 유리",
    "tags": "datastructure computerscience",
    "url": "/computerscience/2021/05/27/cs_ds_01/"
  },{
    "title": "[프로그래머스 / lv.2] 주식가격",
    "text": "날짜: 2021년 5월 27일 소요 시간: 22분 04초 카테고리: 스택/큐 태그: 레벨2, 파이썬 코딩테스트 연습 - 주식가격 입출력 예시 prices return [1,2,3,2,3] [4,3,1,1,0] 내가 적은 코드 def solution(prices): answer = [] for i in range(0,len(prices)): j = 0 while prices[i] &lt;= prices[i + j] and i + j != len(prices) - 1: j += 1 answer.append(j) return answer 풀이 과정 prices[i+j](비교 주식 가격)이 prices[i](현재 주식 가격)보다 작아질 때까지 j가 1씩 증가하게 하여 비교 주식 가격이 현재 주식 가격보다 작아지면 j를 answer 리스트 원소로 추가한다. 베스트 코드 def solution(p): ans = [0] * len(p) stack = [0] for i in range(1, len(p)): if p[i] &lt; p[stack[-1]]: for j in stack[::-1]: if p[i] &lt; p[j]: ans[j] = i-j stack.remove(j) else: break stack.append(i) for i in range(0, len(stack)-1): ans[stack[i]] = len(p) - stack[i] - 1 return ans 반성 이제 브루트포스 코드보다 자료구조를 생각하면서 시간복잡도를 줄이는 코딩을 신경써야겠다.",
    "tags": "programers algorithmpractice",
    "url": "/algorithmpractice/2021/05/27/ap_pg_post1/"
  },{
    "title": "[백준 / 1213] 팰린드롬 만들기",
    "text": "날짜: 2021년 5월 26일 소요 시간: 2시간 초과 카테고리: 구현, 문자열 태그: silver.4, 1213 , 파이썬, time out 백준 1213 - 팰린드롬 만들기 입출력 예시 예제 입력 예제 출력 AABB ABBA 내가 적은 코드 # 문제를 풀지 못하였다. 풀이 과정 문제를 풀지 못하였다. 베스트 코드 err = lambda:print(\"I'm Sorry Hansoo\") s=list(input()) s.sort() d={} for i in s: if d.get(i) != None: d[i]+=1 else: d[i]=1 last='' for k,v in d.items(): if (v%2==1 and last!=''): err() exit(0) if v%2==1: last=k o=\"\" for k,v in d.items(): o+=k*(v//2) print(o+last+o[::-1]) 반성 lambda 함수와 dictionary의 get함수에 대한 이해도가 낮아 정답 코드를 보고도 코드를 이해하는 데 시간이 걸렸다. 파이썬에 대한 이해도도 높일 필요가 있고, 알고리즘 이론적인 부분도 공부할 필요를 느꼈다. 알고리즘 문제를 푸는 비중보다 이론적인 부분을 공부하는 비중을 더 높여야겠다.",
    "tags": "baekjoon algorithmpractice",
    "url": "/algorithmpractice/2021/05/26/ap_bj_post1/"
  },{
    "title": "[백준 / 1254] 팰린드롬 만들기",
    "text": "날짜: 2021년 5월 25일 소요 시간: 2시간 초과 카테고리: 브루트포스 알고리즘 태그: silver.1, 1254, 파이썬, time out 백준 1254 - 팰린드롬 만들기 입출력 예시 예제 입력 예제 출력 abab 5 내가 적은 코드 # 문제를 풀지 못하였다. 풀이 과정 문제를 풀지 못하였다. 베스트 코드 def check(s): isPelin = True for i in range(len(s)//2): if s[i] != s[len(s)-1-i]: isPelin = False break return isPelin s = list(input()) front = list(s) back = [] count = 0 for i in range(len(s)): if check(s): print(len(s)+count) break else: count += 1 back.insert(0, front[i]) if check(front+back): print(len(s)+count) break 반성 처음으로 제한 시간 2시간 안에 다 풀지 못한 문제 정답을 봤을 때 이해가 된다는 건 내가 문제를 많이 풀어보지 않아서 로직은 알지만 코드로 구현을 못하는 거라고 생각한다. 더 많이 풀어서 경험을 늘리는 게 중요하다.",
    "tags": "baekjoon algorithmpractice",
    "url": "/algorithmpractice/2021/05/25/ap_bj_post1/"
  },{
    "title": "[백준 / 1990] 소수인팰린드롬",
    "text": "날짜: 2021년 5월 24일 소요 시간: 1시간 53분 22초 카테고리: 수학 문제 태그: gold.5, 1990, 파이썬 백준 1990 - 소수인팰린드롬 입출력 예시 예제 입력 예제 출력 5 550 5   7   11   101   131   151   181   191   313   353   373   383   -1 내가 적은 코드 def palin(x): a = str(x) b = a[::-1] if a == b: return True else: return False def prime(x): for num in range(2,int((x**0.5))+1): if x % num == 0: return False break return True a, b = map(int, input().split(\" \")) if b &gt; 10000000: b = 10000000. #임의로 지정해준 값 for num in range(a, b+1): if palin(num): if prime(num): print (num) print (-1) 풀이 과정 팰린드롬을 찾는 함수를 정의하고, 소수를 찾는 함수를 정의하여 a와b 범위 안에 두가지를 충족하는 수를 찾는 방식 소수를 찾는 함수에서 소요 시간이 길어져서 줄이기 위해 별 방법을 다 쓰다가 결국 10000000 이상의 소수인팰린드롬이 없다는 전제를 넣어서야 비로소 제한 시간 내에 풀 수 있었다. 애초에 이걸 파이썬으로 풀 수는 있는 건가… 베스트 코드 import sys def isp(n): if n == 1: return False for i in range(2, int(n ** 0.5) + 2): if n % i == 0: return False return True n, m = input().split() nn = int(n) mm = int(m) ln = len(n) lm = len(m) for i in range(ln, lm + 1): if i % 2: lll = i // 2 + 1 for now in range(10 ** (lll - 1), 10 ** lll): nttn = str(now) nini = nttn[:-1] + nttn[::-1] nownum = int(nini) if nownum &gt;= nn and nownum &lt;= mm and isp(nownum): sys.stdout.write(nini) sys.stdout.write(\"\\n\") else: lll = i // 2 for now in range(10 ** (lll - 1), 10 ** lll): nttn = str(now) nini = nttn + nttn[::-1] nownum = int(nini) if nownum &gt;= nn and nownum &lt;= mm and isp(nownum): sys.stdout.write(nini) sys.stdout.write(\"\\n\") sys.stdout.write(\"-1\") 풀 수 있었다… 유일하게 임의로 수를 지정해 주지 않고 푼 코드 파이썬으로 시간 내에 코드를 돌아가게 하려면 파이썬 특성 상 이해도를 높여서 코드를 효율적으로 짜는 능력을 상당히 많이 끌어올려야 될 것 같다. 이걸 봐도 어떤 부분에서 내 코드보다 시간을 아낄 수 있었는지를 찾을 수 없다… 더 공부를 해야겠다고 느꼈다. 반성 알고리즘이 어렵진 않았다. 다만 실행 시간을 줄이기 위해 2시간을 고민했다.",
    "tags": "baekjoon algorithmpractice",
    "url": "/algorithmpractice/2021/05/24/ap_bj_post2/"
  },{
    "title": "[백준 / 1316] 그룹 단어 체커",
    "text": "날짜: 2021년 5월 24일 소요 시간: 48분 02초 카테고리: 수학 문제 태그: silver.5, 1316, 파이썬 백준 1316 - 그룹 단어 체커 입출력 예시 예제 입력 예제 출력 3 3 happy   new   year   4 1 aba   abab   abcabc   a   내가 적은 코드 N = int(input()) count = 0 i = 0 while i &lt; N: voca = input() voca_check = [voca[0]] for j in range(1,len(voca)): if voca[j-1] != voca[j]: voca_check.append(voca[j]) if len(set(voca_check)) == len(voca_check): count += 1 i += 1 print(count) 풀이 과정 입력된 문자열을 첫번째 알파벳부터 그 다음 알파벳을 비교하여 다른 알파벳이 나왔을 경우 voca_check 리스트에 알파벳을 저장하여 voca_check 리스트에서 중복을 제외한 길이와 그냥 voca_check의 길이가 같을 경우 이 수는 그룹 단어이다. 베스트 코드 result = 0 for i in range(int(input())): word = input() if list(word) == sorted(word, key=word.find): result += 1 print(result) 반성 sorted 함수에 대한 이해도가 낮아 훨씬 간단해 질 수 있는 코드를 길게 풀어썼다.",
    "tags": "baekjoon algorithmpractice",
    "url": "/algorithmpractice/2021/05/24/ap_bj_post1/"
  },{
    "title": "[백준 / 1259] 팰린드롬수",
    "text": "날짜: 2021년 5월 23일 소요 시간: 13분 28초 카테고리: 수학 문제 태그: bronze.1, 1259, 파이썬 백준 1259 - 팰린드롬수 입출력 예시 예제 입력 예제 출력 121 yes 1231 no 12421 yes 0   내가 적은 코드 while True: N = input() if N == '0': break for i in range(len(N)//2): if N[i] != N[len(N)-1-i]: print('no') else: print('yes') 풀이 과정 N이 0이 나올 때 까지 이 동작을 계속 반복한다. (여기서 0은 문자열로 선언 해 주어야 한다.) 입력된 N의 길이의 절반만큼 반복하여 앞에서 i번째 숫자와 뒤에서 i번째 숫자가 다르면 ‘no’를 같으면 ‘yes’를 출력한다. 베스트 코드 n=input() while n!='0': if n==n[::-1]: print('yes') else: print('no') n=input() 반성 input으로 입력한 값의 자료형이 문자열이라는 생각을 하지 못해서 코드 수정하는 데 시간이 너무 많이 걸렸다. 이번 문제는 더 쉽게 풀 수 있었는데 내가 생각이 짧아서 문자열을 뒤집는다는 생각을 하지 못하였다.",
    "tags": "baekjoon algorithmpractice",
    "url": "/algorithmpractice/2021/05/23/ap_bj_post1/"
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
    "text": "날짜: 2021년 5월 21일 소요 시간: 1분 5초 카테고리: 인덱싱 태그: 레벨1, 파이썬 코딩테스트 연습 - 직사각형 별찍기 입출력 예시 입력 5 3 출력 ***** ***** ***** 내가 적은 코드 a, b = map(int, input().strip().split(' ')) print((\"*\" * a +\"\\n\") * b) 풀이 과정 for을 써서 풀까 했는데 굳이 어렵게 갈 필요 없는 문제 같아 보여 쉽게 접근했다. 베스트 코드 # 베스트코드라기보단 그냥 다중 for문 정석같은 풀이 a, b = map(int, input().strip().split(' ')) answer='' for i in range(b): for j in range(a): answer+=\"*\" answer+='\\n' print(answer) 반성 모든 컴퓨터공학 학부 전공생들이 1학년 때 푸는 정석같은 문제라 어렵지 않게 풀었다.",
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
