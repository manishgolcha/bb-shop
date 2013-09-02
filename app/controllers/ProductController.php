<?php 

class ProductController extends Controller {
	public function getIndex() {
		return Product::select(array('*',DB::raw('SUBSTRING_INDEX(description," ", 25) as short_description')))->get();
	}

	public function getProductByCategoryId($category_id) {
		return Product::select(array('*',DB::raw('SUBSTRING_INDEX(description," ", 25) as short_description')))->where('category_id','=',$category_id)->get();
	}

	/*public function show($id) {
		return Product::find($id);
	}

	public function update($id) {
		$input = Input::json()->all();
		$task = Product::find($id);
		$task->title = $input['title'];
		$task->status = $input['status'];
		if($task->save()) return $task;
		return false;
	}

	public function destroy($id) {
		$task = Product::find($id)->delete();
	}

	public function store() {
		$input = Input::json()->all();
		$task = new Task;
		$task->title = $input['title'];
		$task->status = $input['status'];
		if($task->save()) return $task;
		return false;
	}*/
}

?>