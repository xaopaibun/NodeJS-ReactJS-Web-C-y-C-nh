-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 29, 2021 lúc 06:17 AM
-- Phiên bản máy phục vụ: 10.4.17-MariaDB
-- Phiên bản PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `dbcaycanh`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `caycanh`
--

CREATE TABLE `caycanh` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `Gia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `caycanh`
--

INSERT INTO `caycanh` (`id`, `name`, `img`, `Gia`) VALUES
(1, 'Thiết mộc lan', 'https://khbvptr.vn/wp-content/uploads/2020/10/van-nien-thanh--800x800.jpg', 300000),
(2, 'Cây cọ cảnh', 'https://kientrucmoi.vn/resources/uploaded/KienTrucMoi/Files/tin%20tuc%201/10%20loai%20cay%20canh%20hut%20khi%20doc%20trong%20nha/10-loai-cay-canh-giup-hut-khi-doc-trong-nha-h5.jpg', 400000),
(3, 'Cây dương xỉ', 'https://kientrucmoi.vn/resources/uploaded/KienTrucMoi/Files/tin%20tuc%201/10%20loai%20cay%20canh%20hut%20khi%20doc%20trong%20nha/10-loai-cay-canh-giup-hut-khi-doc-trong-nha-h6.jpg', 600000),
(4, 'Cay bonsai', 'https://salt.tikicdn.com/ts/tmp/98/7a/c7/4692b2f73254beedd82fa4cd0be64c82.jpg', 5000000),
(5, 'Cây Dây Nhện', 'http://pgrvietnam.org.vn/wp-content/uploads/2018/10/cay-day-nhen-e1539249472417.jpg', 940000),
(6, ' Cây Ngọc Ngân', 'http://pgrvietnam.org.vn/wp-content/uploads/2018/10/cay-ngoc-ngan-phong-thuy-1.jpg', 850000),
(7, 'Cây Trúc Nhật Vàng/ Trúc Nhật Phú Quý', 'http://pgrvietnam.org.vn/wp-content/uploads/2018/10/cay-truc-nhat-phu-quy-phong-thuy.jpg', 239000),
(8, 'Cây Kim Tiền', 'http://pgrvietnam.org.vn/wp-content/uploads/2018/10/cay-kim-tien-5.jpg', 760000),
(9, 'Cây nha đam', 'https://cgarchitects.vn/img/cay-nha-dam/cay-nha-dam-01.jpg', 10000),
(11, 'cay01', 'https://khbvptr.vn/wp-content/uploads/2020/10/van-nien-thanh--800x800.jpg', 30000),
(12, 'cay099', 'https://img.cdn9h.com/article/2019_3_w1/l_598-cay-lan-y-hap-thu-nhung-nang-luong-xung-khac-giup-gia-chu-co-khong-gian-song-yen-binh.jpeg', 30000);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `caycanh`
--
ALTER TABLE `caycanh`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `caycanh`
--
ALTER TABLE `caycanh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
