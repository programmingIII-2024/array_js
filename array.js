function array_print()
{

	let str_array = ["One", "Two", "Three"];
	let num_array = [ 1, 2, 3];

	let out_array=str_array;	// 配列の代入は1行で全要素が入る
//	let out_array=num_array;

	alert(out_array);			// 配列名を指定すると全要素
	alert(out_array[0]);		// 配列の参照番号は0から
	alert(out_array[1]);
	alert(out_array[2]);

	// 配列名.lengthで配列数の取り出し
	alert("配列の要素数は"+out_array.length +"です");

	// 配列の追加は追加要素にそのまま代入
	/*	
	out_array[3]="Four";
	alert(out_array.length +"個目の配列要素は" +out_array[3]);
	*/

	// const宣言された配列の挙動
	/*
	const cnst_array=[ 4, 5, 6];

	cnst_array[0] = 10;	// 配列全体がconst宣言されてるが、要素は代入禁止にならない
	alert(cnst_array[0]);

//	cnst_array = num_array;	// 配列全体にアクセスしようとすると代入エラー
	*/

}
