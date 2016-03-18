CREATE USER REPORT_MGR
IDENTIFIED BY REPORT_MGR
DEFAULT TABLESPACE DATA
TEMPORARY TABLESPACE TEMP
QUOTA UNLIMITED ON DATA
QUOTA UNLIMITED ON DINDX
QUOTA UNLIMITED ON DATAFIX;


GRANT CREATE SESSION to REPORT_MGR;
GRANT CREATE TABLE to REPORT_MGR;
GRANT CREATE PROCEDURE to REPORT_MGR;
GRANT CREATE SEQUENCE to REPORT_MGR;
GRANT CREATE ANY SYNONYM to REPORT_MGR;