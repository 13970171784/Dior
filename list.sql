/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : 2102

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2021-05-13 18:57:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `src` longtext CHARACTER SET utf8,
  `title` text CHARACTER SET utf8,
  `txt` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `price` text CHARACTER SET utf8,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', 'https://media.dior.cn/img/zh_cn/sku/couture/113J692A0614_C676_TXXSX?imwidth=460', '超大版型T恤', '绿色棉质毛圈面料 Oblique 印花', '￥6,400');
INSERT INTO `list` VALUES ('2', 'https://media.dior.cn/img/zh_cn/sku/couture/033B101CB040_C585_TXLX?imwidth=460', '泳装短裤', '蓝色科技帆布“CD Icon”标志', '￥6,400');
INSERT INTO `list` VALUES ('3', 'https://media.dior.cn/img/zh_cn/sku/couture/19B1060A0538_C586_TU?imwidth=460', 'DIOR AND KENNY SCHARF 饰巾', '蓝色桑蚕丝和棉质混纺面料', '￥2,150');
INSERT INTO `list` VALUES ('4', 'https://media.dior.cn/img/zh_cn/sku/couture/B1342HOMMT_D460_TU?imwidth=460', '手链', '蓝色科技面料绳索和白色仿水晶装饰', ' ¥ 3,500');
INSERT INTO `list` VALUES ('5', 'https://media.dior.cn/img/zh_cn/sku/couture/1ADPO093YMJ_H810_TU?imwidth=460', '马鞍包', '迪奥灰粒面牛皮革', '￥26,000');
INSERT INTO `list` VALUES ('6', 'https://www.dior.cn/couture/ecommerce/media/catalog/product/cache/1/cover_image_2/870x580/17f82f742ffe127f42dca9de82fb58b1/n/9/1592293611_3SA081YXV_H961_E02_ZHC.jpg?imwidth=870', 'DIOR ALPHA 凉鞋', '米色和黑色 Oblique 印花', '¥6,700');
INSERT INTO `list` VALUES ('7', 'https://www.dior.cn/couture/ecommerce/media/catalog/product/cache/1/cover_image_1/870x580/17f82f742ffe127f42dca9de82fb58b1/r/C/1617699373_033C508A5196_C586_E01_ZHC.jpg?imwidth=870', 'DIOR AND KENNY SCHARF 衬衫', '蓝色桑蚕丝和棉质混纺提花', '¥14,000');
INSERT INTO `list` VALUES ('8', 'https://www.dior.cn/couture/ecommerce/media/catalog/product/cache/1/cover_image_3/870x580/17f82f742ffe127f42dca9de82fb58b1/v/8/1618251133_193C902A5296_C086_E03_ZHC.jpg?imwidth=870', 'DIOR AND KENNY SCHARF 巴拿马帽', '酒椰草', '¥7,000');
INSERT INTO `list` VALUES ('9', 'https://media.dior.cn/img/zh_cn/sku/couture/3SN277ZJW_H060_T48X?imwidth=460', 'B28 低帮运动鞋', '灰白色 Oblique 印花和白色橡胶', '¥9,200');
INSERT INTO `list` VALUES ('10', 'https://www.dior.cn/couture/ecommerce/media/catalog/product/cache/1/cover_image_1/870x580/17f82f742ffe127f42dca9de82fb58b1/R/e/1619625789_1ADSH175YKS_H05E_E01_ZHC.jpg?imwidth=870', '马鞍手袋', '米色和黑色 Oblique 印花搭配肩带', '¥21,000');
INSERT INTO `list` VALUES ('11', 'https://media.dior.cn/img/zh_cn/sku/couture/2ESKH290YTD_H62Q_TU?imwidth=460', '水瓶和瓶托', '金属覆层不锈钢 Dior 图案，灰白色粒面牛皮革搭配肩带', '¥6,700');
INSERT INTO `list` VALUES ('12', 'https://www.dior.cn/couture/ecommerce/media/catalog/product/cache/1/cover_image_1/870x580/17f82f742ffe127f42dca9de82fb58b1/A/J/1617699368_193J430A0631_C021_E01_ZHC.jpg?imwidth=870', '运动夹克', '白色棉质混纺平纹针织科技面料', '¥14,000');
INSERT INTO `list` VALUES ('13', 'https://media.dior.cn/img/zh_cn/sku/couture/CDLKS1UAR_48A0_54X?imwidth=460', 'CD LINK S1U 太阳眼镜', '灰色半透明方形镜框', '¥4,100');
INSERT INTO `list` VALUES ('14', 'https://media.dior.cn/img/zh_cn/sku/couture/3SH131ZJW_H060_T37X?imwidth=460', 'B28 高帮运动鞋', '灰白色 Oblique 印花和白色橡胶', '¥10,000');
INSERT INTO `list` VALUES ('15', 'https://media.dior.cn/img/zh_cn/sku/couture/1ADPO223YKY_H27E_TU?imwidth=460', '马鞍腰包', '米色和黑色 Oblique 印花', '¥16,500\r\n\r\n¥16,500\r\n¥16,500');
INSERT INTO `list` VALUES ('16', 'https://media.dior.cn/img/zh_cn/sku/couture/1ADPO223YIE_H07E_TU?imwidth=460', '马鞍腰包', '米色和灰白色 Oblique 印花', '¥16,500');
INSERT INTO `list` VALUES ('17', 'https://media.dior.cn/img/zh_cn/sku/couture/113J812A0614_C020_TXXSX?imwidth=460', '超大版型 POLO 衫', '白色棉质提花毛圈面料 Oblique 印花', '¥8,000');
INSERT INTO `list` VALUES ('18', 'https://media.dior.cn/img/zh_cn/sku/couture/3SA094ZIY_H561_T51X?imwidth=460', 'DIOR ATLAS 凉鞋', '米色和黑色 Oblique 印花面料、米色绒面革', '¥8,500');
INSERT INTO `list` VALUES ('19', 'https://media.dior.cn/img/zh_cn/sku/couture/033B360BB023_C632_TSX?imwidth=460', '浴袍', '绿色棉质毛圈面料 Oblique 印花', '¥16,500');
INSERT INTO `list` VALUES ('20', 'https://www.dior.cn/couture/ecommerce/media/catalog/product/cache/1/cover_image_1/870x580/17f82f742ffe127f42dca9de82fb58b1/r/1/1604513181_113J692A0614_C020_E01_ZHC.jpg?imwidth=870', '超大版型 T 恤', '白色棉质毛圈布 Oblique 印花', '¥6,400');
