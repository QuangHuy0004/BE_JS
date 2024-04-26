-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2024 at 05:15 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ccq2211k_cdjs`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_banner`
--

CREATE TABLE `db_banner` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã Slider',
  `name` varchar(1000) NOT NULL COMMENT 'Tên Slider',
  `link` varchar(1000) NOT NULL COMMENT 'Liên kết',
  `position` varchar(100) NOT NULL COMMENT 'Vị trí',
  `image` varchar(1000) NOT NULL COMMENT 'Hình ảnh',
  `sort_order` int(10) UNSIGNED NOT NULL COMMENT 'Thứ tự',
  `created_at` datetime NOT NULL COMMENT 'Ngày tạo',
  `created_by` tinyint(3) UNSIGNED NOT NULL COMMENT 'Người tạo',
  `updated_at` datetime DEFAULT NULL COMMENT 'Ngày sửa',
  `updated_by` tinyint(3) UNSIGNED DEFAULT NULL COMMENT 'Người sửa',
  `status` tinyint(3) UNSIGNED DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_banner`
--

INSERT INTO `db_banner` (`id`, `name`, `link`, `position`, `image`, `sort_order`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'Khuyễn mãi hè 2020', 'http://domain.com/index.php?option=page&cat=khuyen-mai-he', 'slideshow', '20231017162150.jpg', 1, '2020-07-01 07:12:13', 1, '2022-09-03 09:07:10', 1, 1),
(2, 'Khuyễn mãi mùa khai giảng', 'http://domain.com/index.php?option=page&cat=khuyen-mai-mua-khai-giang', 'slideshow', '20231017162150.jpg', 2, '2020-07-01 07:12:13', 1, '2022-09-03 09:07:08', 1, 1),
(3, 'Khuyễn mãi giáng sinh', 'http://domain.com/index.php?option=page&cat=khuyen-giang-sinh', 'slideshow', '20231017162150.jpg', 3, '2020-07-01 07:12:13', 1, '2020-07-01 07:12:13', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_brand`
--

CREATE TABLE `db_brand` (
  `id` int(11) NOT NULL COMMENT 'Mã Loại',
  `name` varchar(255) NOT NULL COMMENT 'Tên loại SP',
  `slug` varchar(255) NOT NULL COMMENT 'SLug Loại SP',
  `sort_order` int(11) NOT NULL COMMENT 'Thứ tự',
  `image` varchar(255) DEFAULT '' COMMENT 'Hình đại diện',
  `description` varchar(255) NOT NULL COMMENT 'Từ khóa SEO',
  `created_at` datetime NOT NULL COMMENT 'Ngày tạo',
  `created_by` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'Người tạo',
  `updated_at` datetime DEFAULT NULL COMMENT 'Ngày sửa',
  `updated_by` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'Người sửa',
  `status` tinyint(4) NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `sort_order`, `image`, `description`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'Việt Namsss', 'viet-nam', 0, 'Huy_Hiá»u_ÄoÃ n.png', 'Từ khóa SEO', '2020-07-03 16:06:19', 1, '2024-04-18 13:43:58', 1, 1),
(2, 'Hàn Quôcss', 'han-quoc', 0, 'z5356127553719_03398808d6c3c34df5b2bde8287a198c.jpg', 'Từ khóa SEO', '2020-07-03 16:06:19', 1, '2024-04-18 13:47:37', 1, 1),
(3, 'Thái Lan', 'thai-lan', 0, 'Huy_Hiá»u_ÄoÃ n.png', 'Từ khóa SEOs', '2020-07-03 16:06:19', 1, '2024-04-18 13:48:56', 1, 1),
(4, 'Nhật Bản', 'nhat-ban', 0, 'Huy_Hiá»u_ÄoÃ n.png', 'Từ khóa SEO', '2020-07-03 16:06:19', 1, '2024-04-18 13:42:38', 1, 0),
(5, 'Quảng Châu', 'quang-chau', 0, '', 'Từ khóa SEO', '2020-07-03 16:06:19', 1, '2022-11-19 18:33:57', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `db_category`
--

CREATE TABLE `db_category` (
  `id` int(11) NOT NULL COMMENT 'Mã Loại',
  `name` varchar(1000) NOT NULL COMMENT 'Tên loại SP',
  `slug` varchar(1000) NOT NULL COMMENT 'SLug Loại SP',
  `parent_id` int(11) NOT NULL DEFAULT 0 COMMENT 'Mã cấp cha',
  `sort_order` int(11) NOT NULL COMMENT 'Thứ tự',
  `image` varchar(1000) DEFAULT NULL COMMENT 'Hình đại diện',
  `description` varchar(255) NOT NULL COMMENT 'Từ khóa SEO',
  `created_at` datetime NOT NULL COMMENT 'Ngày tạo',
  `created_by` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'Người tạo',
  `updated_at` datetime DEFAULT NULL COMMENT 'Ngày sửa',
  `updated_by` tinyint(4) DEFAULT NULL COMMENT 'Người sửa',
  `status` tinyint(4) NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `slug`, `parent_id`, `sort_order`, `image`, `description`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(3, 'Jackets', 'jackets', 0, 0, 'z5356127553719_03398808d6c3c34df5b2bde8287a198c.jpg', '', '2022-11-22 18:18:00', 1, '2024-03-04 20:45:33', 1, 1),
(24, 'Bag', 'bag', 0, 0, 'Huy_Hiá»u_ÄoÃ n.png', 'Balossss', '2000-02-02 10:22:11', 0, '2024-03-03 20:20:25', 1, 1),
(26, 'Bagss', 'bagss', 0, 0, 'hitc.png', 'Balo', '2000-02-02 10:22:11', 0, '2024-03-03 20:13:31', 1, 1),
(27, 'Jackets', 'ho-dien-loi', 0, 0, 'hitc.png', 'ao khoac', '2000-02-02 10:22:11', 0, NULL, NULL, 1),
(28, 'Jackets', 'ho-dien-loi', 0, 0, 'hitc.png', 'ao khoac', '2000-02-02 10:22:11', 0, NULL, NULL, 1),
(30, 'Bag', 'ho-dien-loi', 0, 0, 'happyskin-obagi-tretinoin-01-cream-20g-removebg-preview.png', 'Balo-nam', '2000-02-02 10:22:11', 0, NULL, NULL, 1),
(33, 'Bag', 'bag', 0, 0, 'localhost_3000_.png', 'Balo-nam', '2000-02-02 10:22:11', 0, '2024-03-04 18:18:35', 1, 1),
(34, 'Bag', 'bag', 0, 0, '10518385.jpg', 'Balo-nam', '2000-02-02 10:22:11', 0, '2024-03-04 18:21:34', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_contact`
--

CREATE TABLE `db_contact` (
  `id` int(11) NOT NULL COMMENT 'Mã liên hệ',
  `name` varchar(255) NOT NULL COMMENT 'Họ và tên',
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `email` varchar(100) NOT NULL COMMENT 'Email',
  `phone` varchar(100) NOT NULL COMMENT 'Điện thoại',
  `title` varchar(255) NOT NULL COMMENT 'Tiêu đề',
  `content` mediumtext NOT NULL COMMENT 'Chi tiết',
  `replay_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL COMMENT 'Ngày liên hệ',
  `updated_at` datetime DEFAULT NULL COMMENT 'Ngày trả lời',
  `updated_by` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'Người trả lời',
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT 'Tráng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_contact`
--

INSERT INTO `db_contact` (`id`, `name`, `user_id`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'Nguyễn Văn Toàn', 0, 'nguyenvantoan@gmail.com', '0987654321', 'Hỏi về liên kết mua sĩ', 'Hỏi về liên kết mua sĩ', NULL, '2020-07-01 05:31:49', '2022-11-21 19:50:30', 1, 2),
(2, 'Lê Thái Sơn', 0, 'lethaison@gmail.com', '0987667986', 'Hỏi về liên kết mua sĩ', 'Hỏi về liên kết mua sĩ', NULL, '2020-07-01 05:31:49', '2020-07-01 05:31:49', 1, 1),
(3, 'Trần Ngọc Ái', 0, 'tranngocai@gmail.com', '0987654379', 'Hỏi về liên kết mua sĩ', 'Hỏi về liên kết mua sĩ', NULL, '2020-07-01 05:31:49', '2020-07-01 05:31:49', 1, 1),
(4, 'Mai Tiến Sơn', 0, 'maitienson@gmail.com', '0987654367', 'Hỏi về liên kết mua sĩ', 'Hỏi về liên kết mua sĩ', NULL, '2020-07-01 05:31:49', '2022-11-21 19:54:22', 1, 0),
(7, 'Trần Quang Huy', 0, 'huyitcdct.04@gmail.com', '0961931401', '', 'asd', 0, '2024-03-05 01:55:13', NULL, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_menu`
--

CREATE TABLE `db_menu` (
  `id` int(11) NOT NULL COMMENT 'Mã Menu',
  `name` varchar(255) NOT NULL COMMENT 'Tên Menu',
  `link` varchar(255) NOT NULL COMMENT 'Liên kết',
  `type` varchar(50) NOT NULL COMMENT 'Kiểu Menu',
  `table_id` int(11) NOT NULL DEFAULT 0 COMMENT 'Mã trong bảng',
  `sort_order` int(11) NOT NULL DEFAULT 0 COMMENT 'Thứ tự',
  `position` varchar(255) NOT NULL COMMENT 'Vị trí',
  `level` int(10) UNSIGNED NOT NULL,
  `parent_id` int(11) NOT NULL COMMENT 'Mã cấp cha',
  `created_at` datetime NOT NULL COMMENT 'Ngày Tạo',
  `created_by` tinyint(4) NOT NULL DEFAULT 1 COMMENT 'Người tạo',
  `updated_at` datetime DEFAULT NULL COMMENT 'Ngày sửa',
  `updated_by` tinyint(4) DEFAULT NULL COMMENT 'Người sửa',
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `link`, `type`, `table_id`, `sort_order`, `position`, `level`, `parent_id`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'HOME', 'http://localhost:3000/', 'custom', 0, 2, 'mainmenu', 1, 0, '2022-11-22 19:36:05', 1, '2023-08-01 13:17:16', 1, 1),
(14, 'SHOP', 'http://localhost:3000/product', 'category', 2, 4, 'mainmenu', 1, 0, '2022-11-22 20:14:09', 1, '2022-11-22 20:19:41', 1, 1),
(17, 'BLOG', 'http://localhost:3000/post', 'page', 38, 1, 'mainmenu', 1, 0, '2022-11-22 20:55:36', 1, '2022-11-22 20:55:42', 1, 1),
(29, 'ABOUT', 'http://localhost:3000/about', 'page', 38, 1, 'mainmenu', 1, 0, '2022-11-22 20:55:36', 1, '2022-11-22 20:55:42', 1, 1),
(30, 'CONTACT', 'http://localhost:3000/contact', 'page', 38, 1, 'mainmenu', 1, 0, '2022-11-22 20:55:36', 1, '2022-11-22 20:55:42', 1, 1),
(31, 'ACCOUNT', 'http://localhost:3000/login', 'page', 38, 1, 'mainmenu', 1, 0, '2022-11-22 20:55:36', 1, '2022-11-22 20:55:42', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_order`
--

CREATE TABLE `db_order` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã đơn hàng',
  `user_id` int(11) NOT NULL COMMENT 'Mã khách hàng',
  `exportdate` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Ngày xuất',
  `deliveryaddress` varchar(255) NOT NULL COMMENT 'Địa chỉ người nhận',
  `deliveryname` varchar(100) NOT NULL COMMENT 'Tên người nhận',
  `deliveryphone` varchar(120) NOT NULL COMMENT 'Điện thoại người nhận',
  `deliveryemail` varchar(120) NOT NULL COMMENT 'Email ngươig nhận',
  `created_at` datetime NOT NULL COMMENT 'Ngày tạo',
  `updated_at` datetime DEFAULT NULL COMMENT 'Ngày cập nhật',
  `updated_by` tinyint(3) UNSIGNED DEFAULT NULL COMMENT 'Người cập nhật',
  `status` tinyint(3) UNSIGNED NOT NULL COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_order`
--

INSERT INTO `db_order` (`id`, `user_id`, `exportdate`, `deliveryaddress`, `deliveryname`, `deliveryphone`, `deliveryemail`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(1, 1, '2020-07-03 17:00:00', 'HCM', 'Hồ Đình Lợi', '0987654321', 'loi@gmail.com', '2020-07-01 00:00:00', '2022-12-07 11:23:53', 1, 1),
(2, 1, '2020-07-03 17:00:00', 'Bình Dương', 'Hoàng Mai Toàn', '0987654321', 'toan@gmail.com', '2020-07-01 00:00:00', '2022-11-30 13:47:42', 1, 5),
(3, 1, '2020-07-03 17:00:00', 'HCM', 'Hồ Đình Lợi', '0987654321', 'loi@gmail.com', '2020-07-01 00:00:00', '2022-12-07 11:23:53', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã CT Đơn hàng',
  `order_id` int(10) UNSIGNED NOT NULL COMMENT 'Mã đơn hàng',
  `product_id` int(10) UNSIGNED NOT NULL COMMENT 'Mã sản phẩm',
  `price` float(12,2) NOT NULL COMMENT 'Giá sản phẩm',
  `qty` int(10) UNSIGNED NOT NULL COMMENT 'Số lượng',
  `amount` float(12,2) NOT NULL COMMENT 'Thành tiền'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_orderdetail`
--

INSERT INTO `db_orderdetail` (`id`, `order_id`, `product_id`, `price`, `qty`, `amount`) VALUES
(1, 1, 23, 250000.00, 2, 500000.00),
(2, 1, 25, 250000.00, 3, 750000.00),
(3, 2, 33, 250000.00, 2, 500000.00),
(4, 2, 43, 250000.00, 3, 750000.00);

-- --------------------------------------------------------

--
-- Table structure for table `db_post`
--

CREATE TABLE `db_post` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã bài viết',
  `topic_id` int(10) UNSIGNED DEFAULT NULL COMMENT 'Mã chủ đề',
  `title` varchar(1000) NOT NULL COMMENT 'Tiêu đề bài viết',
  `slug` varchar(1000) NOT NULL COMMENT 'Slug tiêu đề',
  `detail` longtext NOT NULL COMMENT 'Chi tiết bài viết',
  `image` varchar(1000) NOT NULL COMMENT 'Hình ảnh',
  `type` varchar(10) NOT NULL DEFAULT 'post' COMMENT 'Kiểu bài viết',
  `metakey` varchar(255) NOT NULL COMMENT 'Từ khóa SEO',
  `metadesc` varchar(255) NOT NULL COMMENT 'Mô tả SEO',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT 'Ngày tạo',
  `created_by` tinyint(4) NOT NULL COMMENT 'Người tạo',
  `updated_at` timestamp NULL DEFAULT NULL COMMENT 'Ngày sửa',
  `updated_by` tinyint(4) NOT NULL COMMENT 'Người sửa',
  `status` tinyint(4) NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_post`
--

INSERT INTO `db_post` (`id`, `topic_id`, `title`, `slug`, `detail`, `image`, `type`, `metakey`, `metadesc`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(33, 1, 'Nước siêu ngon free từ nhà MaleShop', 'grand-opening-totoday-can-tho', 'grand-opening-totoday-can-tho', 'img/blog/blog-1.jpg', 'post', 'GRAND OPENING TOTODAY CẦN THƠ', 'GRAND OPENING TOTODAY CẦN THƠ', '2024-04-23 12:51:53', 1, '2022-11-22 12:56:09', 1, 1),
(34, 1, 'JEAN ĐEN SIÊU HOT CHỈ VỚI 299K', 'deal-shock-thang-11-chot-gon-quan-jean-den-sieu-hot-chi-voi-299k', 'grand-opening-totoday-can-tho', 'img/blog/blog-2.jpg', 'post', 'DEAL SHOCK THÁNG 11: CHỐT GỌN QUẦN JEAN ĐEN SIÊU HOT CHỈ VỚI 299K', 'DEAL SHOCK THÁNG 11: CHỐT GỌN QUẦN JEAN ĐEN SIÊU HOT CHỈ VỚI 299K', '2024-04-22 12:41:39', 1, '2022-11-22 13:01:25', 1, 1),
(36, 2, 'Chính sách đổi hàng', 'chinh-sach-doi-hang', 'Tại Male Fashion, chúng tôi cam kết đảm bảo sự hài lòng của khách hàng. Nếu bạn không hài lòng với sản phẩm đã mua, bạn có thể đổi hoặc trả lại hàng trong vòng 30 ngày kể từ ngày mua hàng. Để được đổi hoặc trả lại hàng, sản phẩm cần phải còn nguyên vẹn, không bị sử dụng và có hóa đơn mua hàng đi kèm.', 'img/blog/blog-4.jpg', 'page', 'Chính sách đổi hàng', 'Chính sách đổi hàng', '2024-04-25 12:30:10', 1, '2022-11-22 13:07:28', 1, 1),
(37, 2, 'Chính sách bảo hành', 'chinh-sach-bao-hanh', 'Chúng tôi cam kết đảm bảo chất lượng của các sản phẩm tại Male Fashion. Nếu bạn gặp bất kỳ vấn đề nào liên quan đến chất lượng hoặc bảo hành của sản phẩm, vui lòng liên hệ với chúng tôi. Chúng tôi sẽ xem xét và giải quyết vấn đề của bạn một cách nhanh chóng và công bằng.', 'img/blog/blog-5.jpg', 'page', 'Chính sách bảo hành', 'Chính sách bảo hành', '2024-04-25 12:30:13', 1, '2022-11-22 13:08:13', 1, 1),
(38, 2, 'Chính sách hoàn tiền', 'chinh-sach-hoan-tien', 'Chính sách hoàn tiền của chúng tôi đảm bảo rằng bạn sẽ nhận được hoàn tiền đầy đủ cho sản phẩm trả lại. Hoàn tiền sẽ được thực hiện qua cùng phương tiện thanh toán mà bạn đã sử dụng khi mua hàng ban đầu. Thời gian xử lý hoàn tiền có thể mất vài ngày làm việc, tùy thuộc vào chính sách của ngân hàng hoặc phương thức thanh toán.', 'img/blog/blog-7.jpg', 'page', 'Chính Sách Hoàn Tiền', 'Chính Sách Hoàn Tiền', '2024-04-25 12:30:16', 1, '2022-11-22 13:11:30', 1, 1),
(40, 2, 'Chính sách vận chuyển\r\n', 'chinh-sach-hoan-tien', 'Chúng tôi cung cấp dịch vụ vận chuyển nhanh chóng và đáng tin cậy để đảm bảo bạn nhận được sản phẩm trong thời gian ngắn nhất có thể. Chúng tôi cũng cung cấp miễn phí vận chuyển cho các đơn hàng có giá trị trên một khoản tiền nhất định. Thông tin chi tiết về phí vận chuyển và thời gian giao hàng sẽ được cung cấp trong quá trình thanh toán.', 'img/blog/blog-8.jpg', 'page', 'Chính Sách Hoàn Tiền', 'Chính Sách Hoàn Tiền', '2024-04-25 12:30:19', 1, '2022-11-22 13:11:30', 1, 1),
(41, 2, 'Giới thiệu', 'chinh-sach-hoan-tien', 'Male Fashion là điểm đến lý tưởng dành cho những quý ông hiện đại muốn tỏa sáng với phong cách cá nhân độc đáo và sang trọng. Chúng tôi tự hào mang đến những bộ sưu tập thời trang hàng đầu từ các nhãn hiệu nổi tiếng trên thế giới, cùng với dịch vụ chăm sóc khách hàng tận tình và chuyên nghiệp.', 'img/blog/blog-9.jpg', 'page', 'Chính Sách Hoàn Tiền', 'Chính Sách Hoàn Tiền', '2024-04-25 12:30:22', 1, '2022-11-22 13:11:30', 1, 1),
(42, 3, 'Lựa Chọn Trang Phục Độc Đáo', 'deal-shock-thang-11-chot-gon-quan-jean-den-sieu-hot-chi-voi-2999k', 'Tại MaleFashion, bạn sẽ tìm thấy một loạt các trang phục từ các nhãn hiệu nổi tiếng, từ trang phục hàng ngày đến trang phục dành cho các sự kiện đặc biệt. Hãy chọn những bộ trang phục phản ánh phong cách của bạn và tạo ra những bức ảnh ấn tượng.', 'img/blog/blog-12.jpg', 'post', 'DEAL SHOCK THÁNG 11: CHỐT GỌN QUẦN JEAN ĐEN SIÊU HOT CHỈ VỚI 299K', 'DEAL SHOCK THÁNG 11: CHỐT GỌN QUẦN JEAN ĐEN SIÊU HOT CHỈ VỚI 299K', '2024-04-23 13:25:45', 1, '2022-11-22 13:01:25', 1, 1),
(43, 3, 'Địa Điểm Chụp Ảnh Độc Đáo', 'grand-opening-totoday-can-tho', 'Bạn muốn có những bức ảnh độc đáo và nổi bật? Hãy tận dụng các địa điểm chụp ảnh độc đáo tại MaleFashion. Từ nền tảng kiến trúc độc đáo đến khu vườn xanh mát, mỗi không gian đều là một điểm nhấn hoàn hảo cho bức ảnh của bạn.', 'img/blog/blog-10.jpg', 'post', 'GRAND OPENING TOTODAY CẦN THƠ', 'GRAND OPENING TOTODAY CẦN THƠ', '2024-04-23 13:25:42', 1, '2022-11-22 12:56:09', 1, 1),
(45, 3, 'Địa Điểm check in độc đáo', 'grand-opening-totoday-can-tho', 'Bạn muốn có những bức ảnh độc đáo và nổi bật? Hãy tận dụng các địa điểm chụp ảnh độc đáo tại MaleFashion. Từ nền tảng kiến trúc độc đáo đến khu vườn xanh mát, mỗi không gian đều là một điểm nhấn hoàn hảo cho bức ảnh của bạn.', 'img/blog/blog-11.jpg', 'post', 'GRAND OPENING TOTODAY CẦN THƠ', 'GRAND OPENING TOTODAY CẦN THƠ', '2024-04-23 14:25:42', 1, '2022-11-22 12:56:09', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_product`
--

CREATE TABLE `db_product` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã sản phẩm',
  `category_id` int(10) UNSIGNED NOT NULL COMMENT 'Mã loại sản phẩm',
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL COMMENT 'Tên sản phẩm',
  `slug` varchar(1000) NOT NULL COMMENT 'Slug tên sản phẩm',
  `image` varchar(1000) NOT NULL COMMENT 'Hình ảnh',
  `detail` mediumtext NOT NULL COMMENT 'Chi tiết',
  `qty` smallint(5) UNSIGNED NOT NULL COMMENT 'Số lượng',
  `price` float(12,2) NOT NULL COMMENT 'Giá',
  `pricesale` float(12,3) NOT NULL COMMENT 'Giá khuyến mãi',
  `description` varchar(255) NOT NULL COMMENT 'Từ khóa SEO',
  `created_at` datetime NOT NULL COMMENT 'Ngày tạo',
  `created_by` tinyint(3) UNSIGNED NOT NULL COMMENT 'Người tạo',
  `updated_at` datetime DEFAULT NULL COMMENT 'Ngày sửa',
  `updated_by` tinyint(3) UNSIGNED DEFAULT NULL COMMENT 'Người sửa',
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `image`, `detail`, `qty`, `price`, `pricesale`, `description`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 1, 4, 'Ao khoac jean', 'ao-khoac-jean', 'product-2.jpg', '<p>&Aacute;O LEN NAM - TOTODAY - &Aacute;O LEN SỌC LỚN M&Agrave;U</p>\n', 3, 67.24, 0.000, 'ÁO LEN NAM - TOTODAY - ÁO LEN SỌC LỚN MÀU', '2022-11-22 18:40:37', 1, '2022-11-22 18:40:37', 1, 1),
(2, 4, 4, 'Shoes  Chest Bag', 'shoes-chest-bag', 'product-3.jpg', '<h1>&Aacute;O LEN NAM - TOTODAY - &Aacute;O LEN SỌC PHỐI M&Agrave;U</h1>\r\n', 1, 43.48, 0.000, 'ÁO LEN NAM - TOTODAY - ÁO LEN SỌC PHỐI MÀU', '2022-11-22 18:42:49', 1, '2022-11-22 18:42:49', 1, 1),
(3, 1, 1, 'Diagonal Textured Cap', 'diagonal-textured-cap', 'product-4.jpg', '<h1>&Aacute;O LEN NAM - TOTODAY - &Aacute;O LEN TRAFFIC</h1>\r\n', 1, 60.90, 0.000, 'ÁO LEN NAM - TOTODAY - ÁO LEN TRAFFIC', '2022-11-22 18:48:35', 1, '2022-11-22 18:48:35', 1, 1),
(4, 3, 1, 'Ankle Boots', 'ankle-boots', 'product-6.jpg', '<h1>&Aacute;O LEN NAM - TOTODAY - &Aacute;O LEN NHIỀU M&Agrave;U</h1>\r\n', 1, 98.49, 0.000, 'ÁO LEN NAM - TOTODAY - ÁO LEN NHIỀU MÀU', '2022-11-22 18:49:40', 1, '2022-11-22 18:49:40', 1, 1),
(5, 2, 1, 'Bag Limited Contrast Pocket', 'bag-limited-contracts-pocket', 'product-7.jpg', '<h1>&Aacute;O SƠ MI NAM - TOTODAY - THE BASIC</h1>\r\n', 1, 29.66, 0.000, 'ÁO SƠ MI NAM - TOTODAY - THE BASIC', '2022-11-22 19:11:51', 1, '2022-11-22 19:15:16', 1, 1),
(6, 1, 2, 'Ao Thun Don Gian', 'ao-thun-don-gian', 'product-8.jpg', '<h1>&Aacute;O SƠ MI NAM - TOTODAY - THE BASIC</h1>\r\n', 1, 26.28, 0.000, 'ÁO SƠ MI NAM - TOTODAY - COOL SHIRT', '2022-11-22 19:11:51', 1, '2022-11-22 19:14:52', 1, 1),
(7, 1, 2, 'Shirt Basic Flower', 'shirt-basic-flower', 'product-9.jpg', '<h1>&Aacute;O SƠ MI NAM - TOTODAY - SIMPLE SHIRT</h1>\r\n', 1, 67.24, 0.000, 'ÁO SƠ MI NAM - TOTODAY - SIMPLE SHIRT', '2022-11-22 19:16:17', 1, '2022-11-22 19:16:17', 1, 1),
(8, 3, 2, 'Chest Bag Limited', 'chest-bag-limited', 'product-10.jpg', '<h1>&Aacute;O SƠ MI NAM - TOTODAY - FORMAT</h1>\r\n', 1, 43.48, 10000.000, 'ÁO SƠ MI NAM - TOTODAY - FORMAT', '2022-11-22 19:16:51', 1, '2022-11-22 19:16:51', 1, 1),
(9, 2, 4, 'Bag Jean Brows', 'bag-jean-brows', 'product-11.jpg', '<h1>SHORTS JEAN NAM - TOTODAY - 11203</h1>\r\n', 1, 60.90, 10000.000, 'SHORTS JEAN NAM - TOTODAY - 11203', '2022-11-22 19:17:53', 1, '2022-11-22 19:17:53', 1, 1),
(11, 2, 2, 'Bag Contrast Pocket', 'bag-contracts-pocket', 'product-13.jpg', '<h1>SHORTS JEAN NAM - TOTODAY - 11201</h1>\r\n', 1, 49.66, 10000.000, 'SHORTS JEAN NAM - TOTODAY - 11201', '2022-11-22 19:19:43', 1, '2022-11-22 19:19:43', 1, 1),
(12, 3, 3, 'Basic Flowing Scarf', 'basic-flowing-scarf', 'product-14.jpg', '<h1>SHORTS THUN NAM - TOTODAY - FREEDOM TOTODAY</h1>\r\n', 1, 26.28, 10000.000, 'SHORTS THUN NAM - TOTODAY - FREEDOM TOTODAY', '2022-11-22 19:20:53', 1, '2022-11-22 19:20:53', 1, 1),
(51, 4, 3, 'Shoes Alocar Biker Jacket', 'shoes-alocar-bikes-jacket', 'product-1.jpg', '<p>&Aacute;O LEN NAM - TOTODAY - &Aacute;O LEN SỌC LỚN M&Agrave;U</p>\r\n', 3, 67.24, 0.000, 'ÁO LEN NAM - TOTODAY - ÁO LEN SỌC LỚN MÀU', '2022-11-22 18:40:37', 1, '2022-11-22 18:40:37', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_topic`
--

CREATE TABLE `db_topic` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã chủ đề',
  `name` varchar(255) NOT NULL COMMENT 'Tên chủ đề',
  `slug` varchar(255) NOT NULL COMMENT 'Slug tên chủ đề',
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 1 COMMENT 'Sắp xếp',
  `description` varchar(255) NOT NULL COMMENT 'Từ khóa SEO',
  `created_at` datetime NOT NULL COMMENT 'Ngày tạo',
  `created_by` tinyint(3) UNSIGNED NOT NULL COMMENT 'Người tạo',
  `updated_at` datetime DEFAULT NULL COMMENT 'Ngày sửa',
  `updated_by` tinyint(3) UNSIGNED DEFAULT NULL COMMENT 'Người sửa',
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_topic`
--

INSERT INTO `db_topic` (`id`, `name`, `slug`, `sort_order`, `description`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'Tin tức', 'tin-tuc', 1, 'Từ khóa SEO', '2020-07-03 16:14:39', 1, '2020-07-03 16:14:39', 1, 1),
(2, 'Dịch vụ', 'dich-vu', 2, 'Từ khóa SEO', '2020-07-03 16:14:39', 1, '2020-07-03 16:14:39', 1, 1),
(3, 'ádsxcxc', 'adsxcxc', 0, 'dsadasx', '2022-09-01 14:44:20', 1, '2022-09-01 14:46:30', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `db_user`
--

CREATE TABLE `db_user` (
  `id` int(10) UNSIGNED NOT NULL COMMENT 'Mã tài khoản',
  `name` varchar(100) NOT NULL COMMENT 'Họ và tên',
  `username` varchar(100) NOT NULL COMMENT 'Tên đăng nhâp',
  `password` varchar(64) NOT NULL COMMENT 'Mật khẩu',
  `email` varchar(100) NOT NULL COMMENT 'Email',
  `gender` tinyint(3) UNSIGNED NOT NULL COMMENT 'Giới tính',
  `phone` varchar(11) NOT NULL COMMENT 'Điện thoại',
  `image` varchar(100) NOT NULL COMMENT 'Hình',
  `roles` varchar(50) NOT NULL DEFAULT '0' COMMENT 'Quyền truy cập',
  `address` varchar(255) DEFAULT '0',
  `created_at` datetime NOT NULL COMMENT 'Ngày tạo',
  `created_by` tinyint(3) UNSIGNED NOT NULL COMMENT 'Người tạo',
  `updated_at` datetime DEFAULT NULL COMMENT 'Ngày sửa',
  `updated_by` tinyint(3) UNSIGNED DEFAULT NULL COMMENT 'Người sửa',
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2 COMMENT 'Trạng thái'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `db_user`
--

INSERT INTO `db_user` (`id`, `name`, `username`, `password`, `email`, `gender`, `phone`, `image`, `roles`, `address`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'Quản trị', 'admin', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'admin@gmail.com', 1, '0961931401', 'admin.jpg', '1', 'Hồ Chí Minh', '2020-07-01 07:16:03', 1, '2022-11-21 21:37:14', 1, 1),
(2, 'Khách hàng', 'customers', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'khachhang@gmail.com', 1, '0961931401', 'khachhang.jpg', '0', 'Hồ Chí Minh', '2020-07-01 07:16:03', 1, '2022-11-21 20:36:23', 1, 2),
(6, 'Trần Quang Huy', 'client', 'huyitcdct.04@gmail.com', 'clients@gmail.com', 1, '0961931401', 'khachhang.jpg', '0', 'Hồ Chí Minh ', '2024-03-04 19:39:28', 0, '2024-03-04 21:55:30', 1, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_banner`
--
ALTER TABLE `db_banner`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_brand`
--
ALTER TABLE `db_brand`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_category`
--
ALTER TABLE `db_category`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_contact`
--
ALTER TABLE `db_contact`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_menu`
--
ALTER TABLE `db_menu`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_order`
--
ALTER TABLE `db_order`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_post`
--
ALTER TABLE `db_post`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_product`
--
ALTER TABLE `db_product`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_topic`
--
ALTER TABLE `db_topic`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `db_user`
--
ALTER TABLE `db_user`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `db_banner`
--
ALTER TABLE `db_banner`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã Slider', AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mã Loại', AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mã Loại', AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `db_contact`
--
ALTER TABLE `db_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mã liên hệ', AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Mã Menu', AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã đơn hàng', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã CT Đơn hàng', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `db_post`
--
ALTER TABLE `db_post`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã bài viết', AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã sản phẩm', AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã chủ đề', AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `db_user`
--
ALTER TABLE `db_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'Mã tài khoản', AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
