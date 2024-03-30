<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>로그인 정보</title>
    <style>
        table {
            width: 500px;
            border-collapse: collapse;
        }

        th, td {
            padding: 8px;
            border-bottom: 1px solid #ddd;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
<h2>로그인 정보</h2>
<table>
    <tr>
        <th>항목</th>
        <th>값</th>
    </tr>
    <tr>
        <td>아이디</td>
        <td><?php echo isset($_POST['username']) ? $_POST['username'] : ''; ?></td>
    </tr>
    <tr>
        <td>비밀번호</td>
        <td><?php echo isset($_POST['password']) ? $_POST['password'] : ''; ?></td>
    </tr>
    <tr>
        <td>이메일</td>
        <td><?php echo isset($_POST['email']) ? $_POST['email'] : ''; ?></td>
    </tr>
</table>
</body>
</html>
