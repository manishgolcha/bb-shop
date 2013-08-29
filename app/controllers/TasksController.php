<?php 

class TasksController extends Controller {
	public function index() {
		return Task::all();
	}

	public function show($id) {
		return Task::find($id);
	}

	public function update($id) {
		$input = Input::json()->all();
		$task = Task::find($id);
		$task->title = $input['title'];
		$task->status = $input['status'];
		if($task->save()) return $task;
		return false;
	}

	public function destroy($id) {
		$task = Task::find($id)->delete();
	}

	public function store() {
		$input = Input::json()->all();
		$task = new Task;
		$task->title = $input['title'];
		$task->status = $input['status'];
		if($task->save()) return $task;
		return false;
	}
}

?>