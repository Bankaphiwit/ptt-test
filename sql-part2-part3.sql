/*5.*/
SELECT *
FROM `LKPROVINCE`
WHERE SUBSTRING(`PROVINCE_NAME`, 1, 3) === 'กรุง'
ORDER BY `UpdateDate`

/*6.*/
DELETE FROM `LKPROVINCE`
WHERE `PROVINCE_ID` > 10

/*7.*/
SELECT IF(SUBSTRING(`PROVINCE_NAME`, 1, 1) RLIKE '^[กขฃคฅฆงจฉชซฌญฎฏฐฑณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ]$', SUBSTRING(`PROVINCE_NAME`, 1, 1), SUBSTRING(`PROVINCE_NAME`, 2, 1));
FROM `LKPROVINCE`

/*8.*/
UPDATE `LKPROVINCE`
SET `PROVINCE_NAME` = GETDATE()
WHERE `PROVINCE_NAME` = 'กรุงเทพมหานคร'

/*9.*/
INSERT INTO `LKPROVINCE` 
(`PROVINCE_ID`, `PROVINCE_NAME`, `CreateBy`, `CreateDate`)
VALUE(10, 'กรุงเทพมหานคร', 'system', 'วันนี');

/*10*/
SELECT t1.`MS_CUS_ID`, t2.`CUS_NAME`, t3.`PROVINCE_NAME`
FROM `MS_CUSTOMER` AS t1
  LEFT JOIN `PROVINCE_NAME` AS t2
    ON t1.`PROVINCE_ID` = t2.`PROVINCE_ID`

/*11*/
SELeCT e.`Emp_Name`, d.`Dept_Name`, MAX(e.`Salary`)
FROM `DEP` AS d
  LEFT JOIN `EMP` AS e
    ON d.`Dept_ID` = e.`Dept_ID`
WHERE d.`Location` != 'LA'
GROUP BY d.`Location`
ORDER BY e.`Salary`

/*12*/
SELeCT e.`Emp_Name`, d.`Dept_Name`, MAX(e.`Salary`)
FROM `DEP` AS d
  LEFT JOIN `EMP` AS e
    ON d.`Dept_ID` = e.`Dept_ID`
WHERE d.`Location` != 'LA'
GROUP BY d.`Location`
ORDER BY e.`Salary` DESC LIMIT 1,1;

/*13*/
SELeCT e.`Emp_Name`, d.`Dept_Name`, MAX(e.`Salary`)
FROM `DEP` AS d
  LEFT JOIN `EMP` AS e
    ON d.`Dept_ID` = e.`Dept_ID`
WHERE d.`Location` != 'LA'
GROUP BY d.`Location`
ORDER BY e.`Salary` DESC LIMIT 1,1;

/*14*/
CREATE VIEW `VW_EMP` AS
SELECT e.`Emp_ID`, e.`Emp_Name`, d.`Dept_Name`, e.`Salary`
FROM `DEP` AS d
  LEFT JOIN `EMP` AS e
    ON d.`Dept_ID` = e.`Dept_ID`
WHERE e.`Emp_ID` <= 2;

/*15*/
ALTER TABLE `EMP`
DROP COLUMN `Dep_ID`;