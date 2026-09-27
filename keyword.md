Serialization: Chuẩn hóa dữ liệu để trả response cho user

DTO: Data transfer object -> Mô tả kiểu dữ liệu của một object - Định nghĩa cấu trúc dữ liệu của request và response
 * Mô tả dữ liệu Client gửi lên
 * Mô tả dữ liệu Backend trả về Client

So sánh:

DTO: 
 -  DTO trả lời câu hỏi: "Dữ liệu nên có cấu trúc như thế nào?"
 -  DTO = quy định "response nên có dữ liệu gì".
 
Serialization:
 -  Serialization trả lời câu hỏi: "Dữ liệu này được biến đổi/đóng gói như thế nào để gửi đi?"
 -  Serialization = biến object trong Backend thành dữ liệu có thể gửi ra ngoài, đồng thời có thể biến đổi/lọc dữ liệu đó.
 JavaScript Object -> Serialization -> JSON Response -> Client

Trường hợp:
DTO: 
Mục đích chính: Định nghĩa cấu trúc dữ liệu, Validation, Object → JSON Không phải mục đích chính

Serialization:
Mục đích chính: Chuyển đổi dữ liệu, không phải mục đích chính để Validation, Object → JSON Transform dữ liệu
