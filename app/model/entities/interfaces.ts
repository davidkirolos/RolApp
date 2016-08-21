
/*
 *    Project:	RolNG - RolNG
 *    Version:	1.0.0
 *    Date:		21-Apr-2016 3:53:13 PM
 *    Author:	DaviD 
 *
 *    Coded with Netbeans!
 */
export interface Media {
    Id;
    Author;
    Title;
    Description;
    Location;
    MediaDate;
    UploadDate;
    Active;
    SubCategoryId;
    Downloaded;
}

export interface SubCategory {
    Id;
    Name;
    Description;
    // CreatedDate;
    MainCategoryId;
    PlayListId;
    RowNum;
    // Medias: Media[];
}