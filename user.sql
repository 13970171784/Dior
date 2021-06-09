/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : 2102

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2021-05-13 18:57:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` char(255) DEFAULT NULL,
  `password` char(10) DEFAULT NULL,
  `email` longtext,
  `phone` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'yuanyv', '123456', '123456@qq.com', '18888888888');
INSERT INTO `user` VALUES ('2', 'happy', '123456', '123456@qq.com', '18888888888');
INSERT INTO `user` VALUES ('11', 'myself', '123456', '123456@qq.com', '18888888888');
INSERT INTO `user` VALUES ('6', 'ntnt', '987654', '123456@qq.com', '13345678910');
INSERT INTO `user` VALUES ('10', 'change', '987654', '123456@qq.com', '18888888888');
INSERT INTO `user` VALUES ('9', 'look', '123456', '123456@qq.com', '12345678910');
INSERT INTO `user` VALUES ('12', 'zxcv', '123456', '123456@qq.com', '14578967896');
INSERT INTO `user` VALUES ('13', 'vvvvv', '123456', '123456@qq.com', '14578967896');
INSERT INTO `user` VALUES ('14', 'zzzz', '123456', '123456@qq.com', '14578967896');
