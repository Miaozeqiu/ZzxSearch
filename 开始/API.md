# API

`/get_answer_by_content` 为本站的API路由,只接受Post请求
发送的数据示例：

```json
{
  "question_text": "下列哪种药用植物的果实具有舒经活络、和胃化湿"
}
```

返回的数据示例：

```json
{
  "correct_options": ["木瓜"],
  "question": "下列哪种药用植物的果实具有舒经活络、和胃化湿"
}
```

以下是`JavaScript`以及`python`的使用示例

## JavaScript

```javascript
const apiURL = 'http://127.0.0.1:5000/get_answer_by_content'; // 替换为最新的网站链接 API 请求地址

// 要查询的题目内容
const payload = {
  question_text: questionText,
};

// 发送 POST 请求
const response = await fetch(apiURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

//解析数据
const data = await response.json();
```

## python

```python
import requests

def get_correct_options_by_content(question_text):
    url = 'http://127.0.0.1:5000/get_answer_by_content'  # API URL
    payload = {
        'question_text': question_text  # 要查询的题目内容
    }

    try:
        # 发送 POST 请求
        response = requests.post(url, json=payload)
        
        # 检查请求是否成功
        if response.status_code == 200:
            data = response.json()
            print(f"Question: {data['question']}")
            
            # 如果有多个正确答案，逐一打印
            correct_options = data.get('correct_options', [])
            if correct_options:
                print("Correct Options:")
                for option in correct_options:
                    print(f"- {option}")
            else:
                print("No correct options found.")
        else:
            print(f"Error: {response.status_code}, Message: {response.json().get('error', 'No error message')}")
    
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")

if __name__ == '__main__':
        question_text = ''  # 替换为你想查询的题目内容
        get_correct_options_by_content(question_text)
```