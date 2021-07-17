<?php 
	class Conexion
	{
		private $host = 'localhost';
		private $user = 'root';
		private $password = '';
		private $db = 'db_imc';
		protected $conex;

		function __construct()
		{
			$dataDB = "mysql:host=$this->host;dbname=$this->db";
			try {
				$this->conex = new PDO($dataDB, $this->user, $this->password);
				$this->conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			} catch (Exception $e) {
				$this->conex = "Ha ocurrido un error al conectar con la base de datos: {$e->getMessage()}";
				echo $this->conex;
			}
		}
	}
?>