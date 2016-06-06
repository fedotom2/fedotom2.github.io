(function() {

    var doc = document,
        mbtn = doc.getElementsByClassName('mbtn'),
        m_elem;

    for (var i = 0, len = mbtn.length; i < len; i++) {
        mbtn[i].onclick = function(e) {
            if (m_elem !== undefined) m_elem.style.display = "none";

            e.preventDefault()
            var id = e.target.href.split('#')[1]
                elem = doc.getElementById(id);

            elem.style.display = "block";
            m_elem = elem;
        };
    };

})();
