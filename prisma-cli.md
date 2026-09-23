# Giải thích một số câu lệnh Prisma CLI

> Migrate nghĩa là thay đổi cấu trúc database giữa các phiên bản

Sự khác nhau của các câu lệnh

## `npx prisma migrate dev`

- Tạo migration file từ prisma schema -> lịch sử các thay đổi của database qua từng phiên bản
- Apply vào database -> Update các Table hoặc trường của Table trong database -> Đồng bộ database
- Tạo ra type cho prisma client -> Gợi ý được code ví dụ: prismaeService.post hoặc prismaService.user
- Có thể dùng cho cập nhật hoặc khởi tạo db

## `npx prisma db push`

- **Không** tạo ra migration file
- Apply vào database
- Tạo ra type cho prisma client

## `npx prisma generate`

- **Không** tạo ra migration file
- **Không** apply vào database
- Tạo ra type cho prisma client (hay còn gọi là artifacts)

Lưu ý:
Khi các bạn `npm i` thì artifacts sẽ được tạo tự động
