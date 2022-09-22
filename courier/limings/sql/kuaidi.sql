/*
 Navicat MySQL Data Transfer

 Source Server         : 55
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : text

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 26/09/2021 13:56:15
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for text1
-- ----------------------------
DROP TABLE IF EXISTS `text1`;
CREATE TABLE `text1`  (
  `OrderId` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `ExpressType` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `size` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `PickCode` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `isroom` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `vercode` text CHARACTER SET utf8 COLLATE utf8_bin NULL,
  `WhetherFound` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `WhetherDeliver` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `WhetherFinish` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `CustomerPhone` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `PickPersonPhone` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `DeliverPhone` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `OrderFinishTime` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `OrderStartTime` text CHARACTER SET utf8 COLLATE utf8_bin NULL,
  `DeliverWhetherChoose` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `PickWhetherChoose` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `dong` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`OrderId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 66 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of text1
-- ----------------------------
INSERT INTO `text1` VALUES (1, NULL, NULL, NULL, NULL, NULL, NULL, '100000', NULL, NULL, NULL, NULL, NULL, NULL, '', '', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (4, '申通', '15', '15', '123456', '四川', 'true', '100002', 'false', 'false', 'false', '18582707259', '', '', '', '', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (5, '申通', '15', '15', '123456', '四川', 'true', '100003', 'true', 'true', 'true', '18582707259', '', '', '2021-9-09:19:50:52', '2021-9-09:19:34:52', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (6, '申通', '15', '15', '123456', '四川', 'true', '100004', 'false', 'false', 'true', '18582707259', NULL, NULL, '2021-9-10:20:34:52', '2021-9-10:20:26:43', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (10, '申通', '15', '15', '123456', '四川', 'true', '100008', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:17:03', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (11, '申通', '15', '15', '123456', '四川', 'true', '100009', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:17:59', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (12, '申通', '15', '15', '123456', '四川', 'true', '100010', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:17:59', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (13, '申通', '15', '15', '123456', '四川', 'true', '100011', 'true', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:00', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (14, '申通', '15', '15', '123456', '四川', 'true', '100012', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:00', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (15, '申通', '15', '15', '123456', '四川', 'true', '100013', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:01', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (16, '申通', '15', '15', '123456', '四川', 'true', '100014', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:46', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (17, '申通', '15', '15', '123456', '四川', 'true', '100015', 'false', 'false', 'false', '18582707259', '18582707259', '18582707259', NULL, '2021-09-10:21:18:54', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (18, '申通', '15', '15', '123456', '四川', 'true', '100016', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:55', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (19, '申通', '15', '15', '123456', '四川', 'true', '100017', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:55', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (20, '申通', '15', '15', '123456', '四川', 'true', '100018', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:56', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (21, '申通', '15', '15', '123456', '四川', 'true', '100019', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:56', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (22, '申通', '15', '15', '123456', '四川', 'true', '100020', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:57', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (23, '申通', '15', '15', '123456', '四川', 'true', '100021', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:19:01', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (24, '申通', '15', '15', '123456', '四川', 'true', '100022', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:19:01', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (25, '申通', '15', '15', '123456', '四川', 'true', '100023', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:19:02', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (26, '申通', '15', '15', '123456', '四川', 'true', '100024', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:19:02', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (27, '申通', '15', '15', '123456', '四川', 'true', '100025', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:19:03', NULL, NULL, NULL);
INSERT INTO `text1` VALUES (28, NULL, NULL, NULL, NULL, NULL, NULL, '110000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `text1` VALUES (29, '顺丰', '20', '30', '132132', '1-1', 'true', '110001', 'true', 'true', 'false', '654674865', '18552190517', '18552190517', '2021-09-13:06:19:30', '2021-09-13:06:07:50', 'false', 'false', NULL);
INSERT INTO `text1` VALUES (30, '顺丰', '200', '300', '132132', '1-1', 'true', '110002', 'false', 'true', 'false', '654674865', '', '', '2021-09-13:06:19:26', '2021-09-13:06:10:20', 'false', 'false', NULL);
INSERT INTO `text1` VALUES (31, '京东', '99', '88', '45564', '1-2', 'true', '110003', 'false', 'false', 'false', '18582707258', '', NULL, NULL, '2021-09-13:23:13:18', 'false', 'false', NULL);
INSERT INTO `text1` VALUES (32, '申通', '200', '300', '132132', '1-1', 'true', '110004', 'true', 'false', 'false', '654674865', '18552190500', '9999999999', NULL, '2021-09-14:10:49:05', 'true', 'true', '1');
INSERT INTO `text1` VALUES (33, '申通', '200', '300', '132132', '1-2', 'true', '110005', 'true', 'false', 'false', '654674865', '18552190500', '9999999999', NULL, '2021-09-14:10:49:36', 'true', 'true', '1');
INSERT INTO `text1` VALUES (34, '申通', '200', '300', '132132', '1-3', 'true', '110006', 'true', 'false', 'false', '654674865', '18552190500', '9999999999', NULL, '2021-09-14:10:49:40', 'true', 'true', '1');
INSERT INTO `text1` VALUES (35, '申通', '200', '300', '132132', '1-3', 'true', '110007', 'true', 'false', 'false', '4564654564', '18552190500', '9999999999', NULL, '2021-09-14:10:49:51', 'true', 'true', '1');
INSERT INTO `text1` VALUES (36, '申通', '200', '300', '132132', '1-6', 'true', '110008', 'true', 'false', 'false', '4564654564', '18552190500', '9999999999', NULL, '2021-09-14:10:49:59', 'true', 'true', '1');
INSERT INTO `text1` VALUES (37, '申通', '200', '300', '132132', '2-2', 'true', '110009', 'false', 'false', 'false', '4564654564', '18552190500', '9999999999', NULL, '2021-09-14:10:50:10', 'true', 'true', '1');
INSERT INTO `text1` VALUES (38, '申通', '200', '300', '132132', '2-2', 'true', '110010', 'false', 'false', 'false', '4564654564', '18552190500', '9999999999', NULL, '2021-09-14:10:50:51', 'true', 'true', '1');
INSERT INTO `text1` VALUES (39, '申通', '200', '300', '132132', '3-2', 'true', '110011', 'false', 'false', 'false', '4564654564', '18552190500', '9999999999', NULL, '2021-09-14:10:51:10', 'true', 'true', '1');
INSERT INTO `text1` VALUES (40, '申通', '200', '300', '132132', '3-2', 'true', '110012', 'true', 'false', 'false', '4564654564', '18552190500', '9999999999', NULL, '2021-09-14:10:53:11', 'true', 'true', '1');
INSERT INTO `text1` VALUES (41, '申通', '200', '300', '132132', '3-3', 'true', '110013', 'false', 'false', 'false', '4564654564', '18552190500', '9999999999', NULL, '2021-09-14:10:53:24', 'true', 'true', '1');
INSERT INTO `text1` VALUES (42, '申通', '200', '300', '132132', '3-3', 'true', '110014', 'false', 'false', 'false', '4564654564', '18552190500', '9999999999', NULL, '2021-09-14:10:55:40', 'true', 'true', '1');
INSERT INTO `text1` VALUES (43, '申通', '200', '300', '132132', '3-3', 'true', '110015', 'false', 'false', 'false', '4564654564', '18552190500', '9999999999', NULL, '2021-09-14:10:57:05', 'true', 'true', '1');
INSERT INTO `text1` VALUES (44, '申通', '200', '300', '132132', '3-3', 'true', '110016', 'false', 'false', 'false', '4564654564', '18552190500', NULL, NULL, '2021-09-14:10:58:32', 'false', 'true', '3');
INSERT INTO `text1` VALUES (45, '申通', '200', '300', '132132', '2-3', 'true', '110017', 'false', 'false', 'false', '4564654564', '18552190500', NULL, NULL, '2021-09-14:10:58:43', 'false', 'true', '2');
INSERT INTO `text1` VALUES (46, '申通', '200', '300', '132132', '2-5', 'true', '110018', 'false', 'false', 'false', '4564654564', '18552190500', NULL, NULL, '2021-09-14:10:58:46', 'false', 'true', '2');
INSERT INTO `text1` VALUES (47, '申通', '200', '300', '132132', '2-6', 'true', '110019', 'false', 'false', 'false', '4564654564', '18552190500', NULL, NULL, '2021-09-14:10:58:50', 'false', 'true', '2');
INSERT INTO `text1` VALUES (48, '申通', '200', '300', '132132', '2-8', 'true', '110020', 'false', 'false', 'false', '4564654564', '18552190500', NULL, NULL, '2021-09-14:10:58:52', 'false', 'true', '2');
INSERT INTO `text1` VALUES (49, '申通', '200', '300', '132132', '13-8', 'true', '110021', 'false', 'false', 'false', '4564654564', '18552190500', '9999999999', NULL, '2021-09-14:10:58:57', 'true', 'true', '1');
INSERT INTO `text1` VALUES (50, '申通', '200', '300', '132132', '13-8', 'true', '110022', 'false', 'false', 'false', '4564654564', '18552190500', NULL, NULL, '2021-09-14:11:05:58', 'false', 'true', '13');
INSERT INTO `text1` VALUES (51, '申通', '200', '300', '132132', '13-8', 'true', '110023', 'false', 'false', 'false', '4564654564', '18552190500', NULL, NULL, '2021-09-14:11:06:00', 'false', 'true', '13');
INSERT INTO `text1` VALUES (52, '申通', '200', '300', '132132', '8-8', 'true', '110024', 'false', 'false', 'false', '4564654564', '18552190500', NULL, NULL, '2021-09-14:11:06:16', 'false', 'true', '8');
INSERT INTO `text1` VALUES (53, '顺丰,顺丰', '200', '300', '132132', '8-8', 'true', '110025', 'false', 'false', 'false', '4564654564', NULL, NULL, NULL, '2021-09-15:03:54:15', 'false', 'false', '8');
INSERT INTO `text1` VALUES (54, '顺丰,顺丰', '200', '300', '132132', '8-8', 'true', '110026', 'false', 'false', 'false', '4564654564', NULL, NULL, NULL, '2021-09-15:08:46:43', 'false', 'false', '8');
INSERT INTO `text1` VALUES (55, '顺丰,顺丰', '200', '300', '132132', '8-8', 'true', '110027', 'false', 'false', 'false', '4564654564', NULL, NULL, NULL, '2021-09-15:08:46:46', 'false', 'false', '8');
INSERT INTO `text1` VALUES (56, '顺丰,顺丰', '200', '300', '132132', '8-8', 'true', '110028', 'false', 'false', 'false', '4564654564', NULL, NULL, NULL, '2021-09-15:08:46:46', 'false', 'false', '8');
INSERT INTO `text1` VALUES (57, '顺丰,顺丰', '200', '300', '132132', '8-8', 'true', '110029', 'false', 'false', 'false', '4564654564', NULL, NULL, NULL, '2021-09-15:08:46:47', 'false', 'false', '8');
INSERT INTO `text1` VALUES (58, '顺丰,顺丰', '200', '300', '132132', '8-8', 'true', '110030', 'false', 'false', 'false', '4564654564', NULL, NULL, NULL, '2021-09-15:08:46:47', 'false', 'false', '8');
INSERT INTO `text1` VALUES (59, '顺丰,顺丰', '200', '300', '132132', '8-8', 'true', '110031', 'false', 'false', 'false', '4564654564', NULL, NULL, NULL, '2021-09-15:08:46:48', 'false', 'false', '8');
INSERT INTO `text1` VALUES (60, '顺丰,顺丰', '200', '300', '132132', '8-8', 'true', '110032', 'false', 'false', 'false', '4564654564', NULL, NULL, NULL, '2021-09-15:08:46:48', 'false', 'false', '8');
INSERT INTO `text1` VALUES (61, '京东', '200', '300', '132132', '8-8', 'true', '110033', 'false', 'false', 'false', '4564654564', '', NULL, NULL, '2021-09-15:08:50:20', 'false', 'false', '8');
INSERT INTO `text1` VALUES (62, '京东', '200', '300', '132132', '8-8', 'true', '110034', 'false', 'false', 'false', '4564654564', '', NULL, NULL, '2021-09-15:08:50:21', 'false', 'false', '8');
INSERT INTO `text1` VALUES (63, '京东', '200', '300', '132132', '8-8', 'true', '110035', 'false', 'false', 'false', '4564654564', '', NULL, NULL, '2021-09-15:08:50:21', 'false', 'false', '8');
INSERT INTO `text1` VALUES (64, '京东', '200', '300', '132132', '8-8', 'true', '110036', 'false', 'false', 'false', '4564654564', '', NULL, NULL, '2021-09-15:08:50:22', 'false', 'false', '8');
INSERT INTO `text1` VALUES (65, NULL, NULL, NULL, NULL, NULL, NULL, '240000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `text1` VALUES (66, NULL, NULL, NULL, NULL, NULL, NULL, '250000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
