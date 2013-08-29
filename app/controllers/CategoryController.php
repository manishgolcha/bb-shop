<?php 

class CategoryController extends Controller {
	public function index() {
		return Category::orderBy('title','ASC')->get();
	}
}

?>