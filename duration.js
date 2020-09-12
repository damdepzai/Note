const duration = ($duration) => {
    if ($duration > 0) {
        let $time = $duration,
        $year = Math.round($time / (365 * 86400)),
        $month = Math.round($time / (30 * 86400)),
        $week = Math.round($time / (7 * 86400)),
        $day = Math.round($time / 86400),
        $hour = Math.round(($time % 86400) / 3600),
        $minute = Math.round(($time % 3600) / 60),
        $secon = Math.round(($time % 3600) / 3600);

        if ($year != 0) {
            return $year + ' năm ';
        }

        if ($month != 0) {
            return $month + ' tháng ';
        }
        if ($week != 0) {
            return $week + ' tuần ';
        }
        if ($day != 0) {
            return $day + ' ngày ';
        }
        if ($hour != 0) {
            return $hour + ' giờ ';
        }

        if ($minute != 0) {
            return $minute + ' phút ';
        }

        return $secon + ' giây ';
    } else {
        return ' vài giây';
    }
};