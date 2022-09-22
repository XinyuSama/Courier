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

 Date: 26/09/2021 13:56:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for setprice
-- ----------------------------
DROP TABLE IF EXISTS `setprice`;
CREATE TABLE `setprice`  (
  `ExpressType` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `dong` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `layer` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `isroom` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of setprice
-- ----------------------------
INSERT INTO `setprice` VALUES ('申通', '1', '1', '20', 'true', 2);

SET FOREIGN_KEY_CHECKS = 1;
