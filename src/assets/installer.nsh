!include "MUI2.nsh"

!define MUI_ABORTWARNING

!insertmacro MUI_LANGUAGE "English"
!insertmacro MUI_LANGUAGE "Vietnamese"

!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_DIRECTORY
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_PAGE_FINISH

!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
