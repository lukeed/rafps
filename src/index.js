export default function (draw, fps) {
	var delay = 1e3 / (fps || 60);
	var tmp, pid, last, frame = -1;

	function loop(time) {
		if (!last) last = time;
		tmp = ((time - last) / delay) | 0;
		if (pid && tmp > frame) draw(frame=tmp);
		if (pid) pid = requestAnimationFrame(loop);
	}

	return {
		play: function () {
			if (!pid) pid = requestAnimationFrame(loop);
		},
		pause: function () {
			if (pid) {
				last = pid = cancelAnimationFrame(pid);
				frame = -1;
			}
		}
	};
}
