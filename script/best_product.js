$(function () {
	var leftValue = 0;
	var maxLeft = 0;

	setInterval(function () {
		maxLeft = $(".best_product > .best > ul").outerWidth() - $(".best_product").outerWidth();

		if (leftValue <= -maxLeft) {
			leftValue = -maxLeft;
			$(".best_product > .best > ul").css({
				left: leftValue
			});
		} else {
			$("button.btn_next").css({
				background: "url(/images/btn_next_a.png"
			});
		}
	}, 20);

	$("button.btn_next").click(function () {
		$("button.btn_prev").css({
			background: "url(/images/btn_prev_n.png)"
		});
		leftValue -= 220;
		if (leftValue <= -maxLeft) {
			leftValue = -maxLeft;
			$("button.btn_next").css({
				background: "url(/images/btn_next_a.png)"
			});
		}
		$(".best_product > .best > ul").css({
			left: leftValue
		});
	});

	$("button.btn_prev").click(function () {
		$("button.btn_next").css({
			background: "url(/images/btn_next_a.png)"
		});
		leftValue += 220;
		if (leftValue >= 0) {
			leftValue = 0;
			$("button.btn_prev").css({
				background: "url(/images/btn_prev_n.png)"
			});
		}
		$(".best_product > .best > ul").css({
			left: leftValue
		});
	});
});
