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

 Date: 26/09/2021 13:56:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `Account` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `permissions` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('18582707259', '987654', '3');
INSERT INTO `user` VALUES ('15282190517', '123456', '2');
INSERT INTO `user` VALUES ('8888888888', '123456', '2');
INSERT INTO `user` VALUES ('8888888888', '123456', '1');
INSERT INTO `user` VALUES ('77777777777', '123456', '1');
INSERT INTO `user` VALUES ('6666666666', '123456', '1');
INSERT INTO `user` VALUES ('222222222', '123456', '1');
INSERT INTO `user` VALUES ('55555555555', '123456', '1');
INSERT INTO `user` VALUES ('5555555555555', '123456', '1');
INSERT INTO `user` VALUES ('55555555555555655', '123456', '1');
INSERT INTO `user` VALUES ('9999999999999', '123456', '1');
INSERT INTO `user` VALUES ('13345678910', '123456', '1');
INSERT INTO `user` VALUES ('17345678910', '123456', '1');
INSERT INTO `user` VALUES ('19345678910', '123456', '1');
INSERT INTO `user` VALUES ('17845688918', '212132321', '0');

SET FOREIGN_KEY_CHECKS = 1;
