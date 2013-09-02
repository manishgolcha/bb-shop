<?php

class CartController extends Controller {

	public function index() {	
		$session = Session::all();	
		return Cart::where('session_id','=',$session['_token'])->get();
	}

	public function store() {
		$session = Session::all();
		$input = Input::json()->all();
		$cart = new Cart;
		$cart->title = $input['title'];
		$cart->price = $input['price'];
		$cart->product_id = $input['productId'];
		$cart->session_id = $session['_token'];
		$cart->quantity = $input['quantity'];
		if($cart->save()) return $cart;
		return false;
	}

	public function update($id) {
		$input = Input::json()->all();
		$cart = Cart::find($id);
		$cart->title = $input['title'];
		$cart->price = $input['price'];
		$cart->product_id = $input['product_id'];
		$cart->quantity = $input['quantity'];
		if($cart->save()) return $cart;
		return false;
	}

	public function destroy($id) {
		Cart::find($id)->delete();
	}
}

?>