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

 Date: 07/09/2021 06:58:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for text1
-- ----------------------------
DROP TABLE IF EXISTS `text1`;
CREATE TABLE `text1`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `ExpressType` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `size` text CHARACTER SET utf8 COLLATE utf8_bin NULL,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `VerificationCode` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of text1
-- ----------------------------
INSERT INTO `text1` VALUES (1, '申通', '15kg', '30元', '123456', 'www.baidu.com');
INSERT INTO `text1` VALUES (2, '15.2', '15.2', '123', '31654', '1222222222');
INSERT INTO `text1` VALUES (3, '15.2', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (4, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (5, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (6, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (7, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (8, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (9, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (10, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (11, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (12, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (13, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (14, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (15, '顺丰', '15.2', '123', '31654', 'http://www.baidu.com');
INSERT INTO `text1` VALUES (16, '申通', '199', '89', '564564', 'www.');
INSERT INTO `text1` VALUES (17, '申通', '199', '89', '564564', 'www.');
INSERT INTO `text1` VALUES (18, '申通', '199', '89', '564564', 'www.');
INSERT INTO `text1` VALUES (19, '申通', '199', '89', '564564', 'www.');
INSERT INTO `text1` VALUES (20, '申通', '199', '89', '564564', 'www.');
INSERT INTO `text1` VALUES (21, '申通', '199', '89', '564564', 'www.');
INSERT INTO `text1` VALUES (22, '申通', '199', '89', '564564', 'www.');
INSERT INTO `text1` VALUES (23, '申通', '199', '89', '564564', 'www.');

SET FOREIGN_KEY_CHECKS = 1;
