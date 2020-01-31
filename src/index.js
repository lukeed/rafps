export default function (draw, fps) {
	var delay = 1e3 / (fps || 60);
	var tmp, pid, playing=0, last, frame=-1;

	function loop(time) {
		if (!last) last = time;
		tmp = ((time - last) / delay) | 0;
		if (playing && tmp > frame) draw(frame = tmp);
		pid = requestAnimationFrame(loop);
	}

	return {
		play: function () {
			if (!playing) {
				playing = 1;
				pid = requestAnimationFrame(loop);
			}
		},
		pause: function () {
			if (playing) {
				cancelAnimationFrame(pid);
				playing = last = 0;
				frame = -1;
			}
		}
	};
}
