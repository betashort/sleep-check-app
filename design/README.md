# 設計書


## 機能

## API
| function | method | url | prams | body | response | 
| - | - | - | - | - | - |
| 睡眠イベントを取得する | get | api/sleep-event/  | | | Json List </br> eventList: [{ title: string; start:string; end:string}]|
| 睡眠イベントを登録する | post | api/sleep-event  | | { title: string; start:string; end:string} | status|
||||| 

## データベース

| 変数 | 型 |  
| - | - |  
| id | string |
| title | string |
| start | string |  
| end | string |
