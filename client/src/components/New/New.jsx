import s from "./New.module.css";
import logo1 from "../images/items/popular/popular-1.webp";
import logo2 from "../images/items/popular/popular-2.webp";
import logo3 from "../images/items/popular/popular-3.webp";
import logo4 from "../images/items/popular/popular-4.webp";
////!data ? "loading..." : data
export function New() {


	return (
		<>
			<div className={s.container}>
				<div className={s.rangeNew}>
					<h1 className={s.headerline}>Новое и популярное</h1>
					<div className={s.box}>

						{

							 // !data.products.novelty  ?  <div>loading...</div> : data.products.novelty.map( (el)=> {
								//  const [] = el
								// return 	<div className={s.item}>
								// 	<div className={s.wrap}>
								// 		<img
								// 			className={s.img}
								// 			src={logo1}
								// 			alt="&#127829"
								// 		/>
								// 	</div>
								// 	<div className={s.info}>
								// 		<p className={s.title}>Цезарь</p>
								// 		<p className={s.price}>от 445 ₽</p>
								// 	</div>
								// </div>
							 // } )
						}


					</div>
				</div>
			</div>
		</>
	);
}
