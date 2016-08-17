<?php
header("access-control-allow-origin: *");
require_once("Rest.inc.php");

class API extends REST {
	
	public $data = "";
	
	const DB_SERVER = "localhost";
	const DB_USER = "rivers_dbuser";
	const DB_PASSWORD = "?QX@1<{QS!Bv";
	const DB = "rivers_MediaDB2";
	
	private $db = NULL;
	
	public function __construct() {
		parent::__construct();
		// 		Init parent contructor
		        $this->dbConnect();
		// 		Initiate Database connection
	}
	
	//D	atabase connection
	    private function dbConnect() {
		$this->db = mysqli_connect(self::DB_SERVER, self::DB_USER, self::DB_PASSWORD);
		if ($this->db){
			mysqli_select_db($this->db, self::DB);
			mysqli_set_charset($this->db, "utf8");
		}
	}
	
	//P	ublic method for access api.
	//T	his method dynmically call the method based on the query string
	    public function processApi() {
		
		$username = htmlspecialchars($_GET["u"]);
		$password = htmlspecialchars($_GET["p"]);
		if ($username == 'Admin' && $password == 'c@l!f0rni@') {
			
			$func = strtolower(trim(str_replace("/", "", $_REQUEST['rquest'])));
			if ((int) method_exists($this, $func) > 0)
			                $this->$func();
			else
			                $this->response('', 404);
		}
		else {
			$this->response('', 403);
			// 			If no records "No Content" status
		}
	}
	
	private function login() {
		// 		Cross validation if the request method is POST else it will return "Not Acceptable" status
		        if ($this->get_request_method() != "POST") {
			$this->response('', 406);
		}
		
		$email = $this->_request['email'];
		$password = $this->_request['pwd'];
		
		// 		Input validations
		        if (!empty($email) and ! empty($password)) {
			if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
				$sql = mysqli_query($this->db, "SELECT id, username, email FROM User WHERE email = '$email' AND password = '" . md5($password) . "' LIMIT 1");
				if (mysqli_num_rows($sql) > 0) {
					$result = mysqli_fetch_array($sql, MYSQL_ASSOC);
					
					// 					If success everythig is good send header as "OK" and user details
					                    $this->response($this->json($result), 200);
				}
				$this->response('', 204);
				// 				If no records "No Content" status
			}
		}
		
		// 		If invalid inputs "Bad Request" status message and reason
		        $error = array('status' => "Failed", "msg" => "Invalid Email address or Password");
		$this->response($this->json($error), 400);
	}
	
	
	
	private function mc() {
		// 		Cross validation if the request method is GET else it will return "Not Acceptable" status
		        if ($this->get_request_method() != "GET") {
			$this->response('', 406);
		}
		$sql = mysqli_query($this->db, "SELECT * FROM MainCategory order by Description");
		if (mysqli_num_rows($sql) > 0) {
			$result = array();
			while ($rlt = mysqli_fetch_array($sql, MYSQL_ASSOC)) {
				$result[] = $rlt;
			}
			// 			If success everythig is good send header as "OK" and return list of users in JSON format
			            $this->response($this->json($result), 200);
		}
		$this->response('', 204);
		// 		If no records "No Content" status
	}
	
	private function sc() {
		// 		Cross validation if the request method is GET else it will return "Not Acceptable" status
		        if ($this->get_request_method() != "GET") {
			$this->response('', 406);
		}
		$id = (int) $this->_request['id'];
		if ($id > 0) {
			// 			$sql = mysqli_query($this->db, "SELECT * FROM SubCategory where MainCategoryId = $id and (select count(id) from Media where SubCategoryId = $id and Active = 1) > 0 order by Description");
			$sql = mysqli_query($this->db, "select distinct SubCategory.Id,SubCategory.Name,SubCategory.Description, SubCategory.CreatedDate,SubCategory.MainCategoryId,SubCategory.PlayListId from SubCategory ,(select distinct SubCategoryId, Media.id from Media order by Media.MediaDate desc) as Media WHERE SubCategory.Id = Media.SubCategoryId and SubCategory.MainCategoryId = $id");
			$result = array();
			while ($rlt = mysqli_fetch_array($sql, MYSQL_ASSOC)) {
				$result[] = $rlt;
			}
			// 			If success everythig is good send header as "OK" and return list of users in JSON format
			            $this->response($this->json($result), 200);
		}
		else {
			$this->response('', 204);
			// 			If no records "No Content" status
		}
	}
	
	
	
	private function m() {
		// 		Cross validation if the request method is GET else it will return "Not Acceptable" status
		        if ($this->get_request_method() != "GET") {
			$this->response('', 406);
		}
		$id = (int) $this->_request['id'];
		if ($id > 0) {
			$sql = mysqli_query($this->db, "SELECT * FROM Media where SubCategoryId = $id and Active = 1 order by MediaDate desc");
			$result = array();
			while ($rlt = mysqli_fetch_array($sql, MYSQL_ASSOC)) {
				$result[] = $rlt;
			}
			// 			If success everythig is good send header as "OK" and return list of users in JSON format
			            $this->response($this->json($result), 200);
		}
		else {
			$this->response('', 204);
			// 			If no records "No Content" status
		}
	}
	
	
	private function ml() {
		// 		Cross validation if the request method is GET else it will return "Not Acceptable" status
		        if ($this->get_request_method() != "GET") {
			$this->response('', 406);
		}
		$id = (int) $this->_request['id'];
		if ($id > 0) {
			$subCategoryTitleQuery = 'SELECT * FROM SubCategory where Id ='. $id;
			$result1 = $this->db->query($subCategoryTitleQuery);
			$subCatName = NULL;
			$subCatDescription = NULL;
			if ($result1->num_rows > 0) {
				// 				output data of each row
				                while($row = $result1->fetch_assoc()) {
					$subCatName = $row['Name'];
					$subCatDescription =  $row['Description'];
				}
			}
			else {
				$this->response('', 204);
				// 				If no records "No Content" status
			}
			$sql = mysqli_query($this->db, "SELECT * FROM Media where SubCategoryId = $id and Active = 1 order by MediaDate");
			$result = array();
			// 			$xmlDoc = '<rss xmlns:media="http://search.yahoo.com/mrss" version="2.0"> '. "\n" 
			                    . '<channel> '. "\n"
			                    . '  <title>'.$subCatName.'</title> '. "\n"
			                    . '  <description>'.$subCatDescription.'</description> '. "\n"
			                    . '  <link>http://riversoflife.ca/mediaplayer.php?playlistFile=recommended_list.xml</link> '. "\n" ;
			
			
			while ($rlt = mysqli_fetch_array($sql, MYSQL_ASSOC)) {
				$xmlDoc = $xmlDoc.'<item> '. "\n"
				                        . '<media:credit role="author">'.$rlt['Author'].'</media:credit> '. "\n"
				                        . '<title>'.$rlt['Title'].'</title> '. "\n"
				                        . '<description>'.$rlt['Description'].'</description> '. "\n"
				// 				. '<media:content url="'.$rlt['Location'].'" type="audio/mpeg"/> '. "\n"
				                        . '<media:content url="'.$rlt['Location'].'" /> '. "\n"
				                        . '<pubDate>'.$rlt['MediaDate'].'</pubDate> '. "\n" 
				                        . '<guid>'.$rlt['Id'].'</guid> '. "\n"
				                        . '<media:thumbnail url=""/> '. "\n"
				                        . '</item> '. "\n";
			}
			$xmlDoc = $xmlDoc.'</channel> '. "\n"
			                         . '</rss> '. "\n";
			// 			If success everythig is good send header as "OK" and return list of users in JSON format
			                 header('Content-type: application/xml');
			echo $xmlDoc;
			
			$this->db->close();
		}
		else {
			$this->response('', 204);
			// 			If no records "No Content" status
		}
	}
	private function scm() {
		// 		Cross validation if the request method is GET else it will return "Not Acceptable" status
		        if ($this->get_request_method() != "GET") {
			$this->response('', 406);
		}
		$id = (int) $this->_request['id'];
		if ($id > 0) {
			
			$subCategoryQuery = mysqli_query($this->db, "select distinct SubCategory.Id,SubCategory.Name,SubCategory.Description, SubCategory.CreatedDate,SubCategory.MainCategoryId,SubCategory.PlayListId from SubCategory ,(select distinct SubCategoryId, Media.id from Media order by Media.MediaDate desc) as Media WHERE SubCategory.Id = Media.SubCategoryId and SubCategory.MainCategoryId = $id");
			
			// 			$subCategoryQuery = mysqli_query($this->db, "SELECT * FROM SubCategory where MainCategoryId = $id and (select count(id) from Media where SubCategoryId = $id and Active = 1) > 0 order by Description");
			$subCategories = array();
			$rowNum = 1;
			while ($subCategory = mysqli_fetch_array($subCategoryQuery, MYSQL_ASSOC)) {
				
				$subCategoryId = $subCategory['Id'];
				$mediaQuery = mysqli_query($this->db, "SELECT * FROM Media where SubCategoryId = $subCategoryId and Active = 1 order by MediaDate desc");
				$medias = array();
				while ($media = mysqli_fetch_array($mediaQuery, MYSQL_ASSOC)) {
					$media['MediaDate'] = date_format(date_create($media['MediaDate']), 'd-F-Y');
					$medias[] = $media;
				}
				
				$subCategory['RowNum'] = $rowNum;
				$subCategory['Medias'] = $medias;
				$subCategories[] = $subCategory;
				$rowNum++;
			}
			$this->response($this->json($subCategories), 200);
			
			
		}
		else {
			$this->response('', 204);
			// 			If no records "No Content" status
		}
	}
	
	
	private function allscm() {
		// 		Cross validation if the request method is GET else it will return "Not Acceptable" status
		        if ($this->get_request_method() != "GET") {
			$this->response('', 406);
		}
		
		$subCategoryQuery = mysqli_query($this->db, "select distinct SubCategory.Id,SubCategory.Name,SubCategory.Description, SubCategory.CreatedDate,SubCategory.MainCategoryId,SubCategory.PlayListId from SubCategory ,(select distinct SubCategoryId, Media.id from Media order by Media.MediaDate desc) as Media WHERE SubCategory.Id = Media.SubCategoryId and (SubCategory.MainCategoryId in (1,2,14,15,16,20,21) or SubCategory.Id in (80,97,160) )" );
		
		// 		$subCategoryQuery = mysqli_query($this->db, "SELECT * FROM SubCategory where MainCategoryId = $id and (select count(id) from Media where SubCategoryId = $id and Active = 1) > 0 order by Description");
		$subCategories = array();
		$rowNum = 1;
		while ($subCategory = mysqli_fetch_array($subCategoryQuery, MYSQL_ASSOC)) {
			
			$subCategoryId = $subCategory['Id'];
			$mediaQuery = mysqli_query($this->db, "SELECT * FROM Media where SubCategoryId = $subCategoryId and Active = 1 order by MediaDate desc");
			$medias = array();
			while ($media = mysqli_fetch_array($mediaQuery, MYSQL_ASSOC)) {
				$media['MediaDate'] = date_format(date_create($media['MediaDate']), 'd-F-Y');
				$medias[] = $media;
			}
			
			$subCategory['RowNum'] = $rowNum;
			$subCategory['Medias'] = $medias;
			$subCategories[] = $subCategory;
			$rowNum++;
		}
		$this->response($this->json($subCategories), 200);
		
		
	}
	
	//E	ncode array into JSON
	    private function json($data) {
		if (is_array($data)) {
			return json_encode($data);
		}
	}
	
	}	
	// 	Initiiate Library
	//h	eader('Content-Type: text/html; charset=utf-8');
	$api = new API;
	$api->processApi();
	?>