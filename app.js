function date() {
    const y = new Date();
    const mon = new Date();
    const d = new Date();
    const h = new Date();
    const min = new Date();
    const s = new Date();
    const ms = new Date();
    const tzo = new Date();
    const yy = new Date();
    const mmon = new Date();
    const dd = new Date();
    const hh = new Date();
    const mmin = new Date();
    const ss = new Date();
    const mms = new Date();

    let year = y.getFullYear();
    let month = mon.getMonth();
    let day = d.getDay();
    let hours = h.getHours();
    let minutes = min.getMinutes();
    let seconds = s.getSeconds();
    let milliseconds = ms.getMilliseconds();
    let TimeZoneOffest = tzo.getTimezoneOffset();
    let yearr = yy.getUTCFullYear();
    let monthh = mmon.getUTCMonth();
    let dayy = dd.getUTCDay();
    let hourss = hh.getUTCHours();
    let minutess = mmin.getUTCMinutes();
    let secondss = ss.getUTCSeconds();
    let millisecondss = mms.getUTCMilliseconds();




    document.getElementById("year").value = year + "  year";
    document.getElementById("month").value = month + "  month";
    document.getElementById("day").value = day + "  day";
    document.getElementById("hours").value = hours + "  hours";
    document.getElementById("minutes").value = minutes + "  minutes";
    document.getElementById("seconds").value = seconds + "  seconds";
    document.getElementById("milliseconds").value = milliseconds + "  milliseconds";
    document.getElementById("TimeZoneOffest").value = TimeZoneOffest + "  Time Zone Offest";
    document.getElementById("yearr").value = yearr + "  UTC year";
    document.getElementById("monthh").value = monthh + "  UTC month";
    document.getElementById("dayy").value = dayy + "  UTC day";
    document.getElementById("hourss").value = hourss + "  UTC hours";
    document.getElementById("minutess").value = minutess + "  UTC minutes";
    document.getElementById("secondss").value = secondss + "  UTC seconds";
    document.getElementById("millisecondss").value = millisecondss + "  UTC milliseconds";
        
}
