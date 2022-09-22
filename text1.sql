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

 Date: 13/09/2021 15:44:58
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
  PRIMARY KEY (`OrderId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of text1
-- ----------------------------
INSERT INTO `text1` VALUES (1, NULL, NULL, NULL, NULL, NULL, NULL, '100000', NULL, NULL, NULL, NULL, NULL, NULL, '', '', NULL, NULL);
INSERT INTO `text1` VALUES (4, '申通', '15', '15', '123456', '四川', 'true', '100002', 'false', 'false', 'false', '18582707259', '', '', '', '', NULL, NULL);
INSERT INTO `text1` VALUES (5, '申通', '15', '15', '123456', '四川', 'true', '100003', 'true', 'true', 'true', '18582707259', '', '', '2021-9-09:19:50:52', '2021-9-09:19:34:52', NULL, NULL);
INSERT INTO `text1` VALUES (6, '申通', '15', '15', '123456', '四川', 'true', '100004', 'false', 'false', 'true', '18582707259', NULL, NULL, '2021-9-10:20:34:52', '2021-9-10:20:26:43', NULL, NULL);
INSERT INTO `text1` VALUES (10, '申通', '15', '15', '123456', '四川', 'true', '100008', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:17:03', NULL, NULL);
INSERT INTO `text1` VALUES (11, '申通', '15', '15', '123456', '四川', 'true', '100009', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:17:59', NULL, NULL);
INSERT INTO `text1` VALUES (12, '申通', '15', '15', '123456', '四川', 'true', '100010', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:17:59', NULL, NULL);
INSERT INTO `text1` VALUES (13, '申通', '15', '15', '123456', '四川', 'true', '100011', 'true', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:00', NULL, NULL);
INSERT INTO `text1` VALUES (14, '申通', '15', '15', '123456', '四川', 'true', '100012', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:00', NULL, NULL);
INSERT INTO `text1` VALUES (15, '申通', '15', '15', '123456', '四川', 'true', '100013', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:01', NULL, NULL);
INSERT INTO `text1` VALUES (16, '申通', '15', '15', '123456', '四川', 'true', '100014', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:46', NULL, NULL);
INSERT INTO `text1` VALUES (17, '申通', '15', '15', '123456', '四川', 'true', '100015', 'false', 'false', 'false', '18582707259', '18582707259', '18582707259', NULL, '2021-09-10:21:18:54', NULL, NULL);
INSERT INTO `text1` VALUES (18, '申通', '15', '15', '123456', '四川', 'true', '100016', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:55', NULL, NULL);
INSERT INTO `text1` VALUES (19, '申通', '15', '15', '123456', '四川', 'true', '100017', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:55', NULL, NULL);
INSERT INTO `text1` VALUES (20, '申通', '15', '15', '123456', '四川', 'true', '100018', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:56', NULL, NULL);
INSERT INTO `text1` VALUES (21, '申通', '15', '15', '123456', '四川', 'true', '100019', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:56', NULL, NULL);
INSERT INTO `text1` VALUES (22, '申通', '15', '15', '123456', '四川', 'true', '100020', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:18:57', NULL, NULL);
INSERT INTO `text1` VALUES (23, '申通', '15', '15', '123456', '四川', 'true', '100021', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:19:01', NULL, NULL);
INSERT INTO `text1` VALUES (24, '申通', '15', '15', '123456', '四川', 'true', '100022', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:19:01', NULL, NULL);
INSERT INTO `text1` VALUES (25, '申通', '15', '15', '123456', '四川', 'true', '100023', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:19:02', NULL, NULL);
INSERT INTO `text1` VALUES (26, '申通', '15', '15', '123456', '四川', 'true', '100024', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:19:02', NULL, NULL);
INSERT INTO `text1` VALUES (27, '申通', '15', '15', '123456', '四川', 'true', '100025', 'false', 'false', 'false', '18582707259', NULL, NULL, NULL, '2021-09-10:21:19:03', NULL, NULL);
INSERT INTO `text1` VALUES (28, NULL, NULL, NULL, NULL, NULL, NULL, '110000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `text1` VALUES (29, '顺丰', '20', '30', '132132', '1-1', 'true', '110001', 'true', 'true', 'false', '654674865', '18552190517', '18552190517', '2021-09-13:06:19:30', '2021-09-13:06:07:50', 'false', 'false');
INSERT INTO `text1` VALUES (30, '顺丰', '200', '300', '132132', '1-1', 'true', '110002', 'false', 'false', 'false', '654674865', '', '', '2021-09-13:06:19:26', '2021-09-13:06:10:20', 'false', 'false');

SET FOREIGN_KEY_CHECKS = 1;
