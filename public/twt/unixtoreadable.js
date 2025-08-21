      //NOTE - converts the unix to a readable time stamp
        document.querySelectorAll("time.post-time").forEach(el => {
          let timestamp = parseInt(el.getAttribute("datetime"), 10);
          let date = new Date(timestamp * 1000);

      //NOTE - change these variables if you want a different time format 
        el.textContent = date.toLocaleString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: '2-digit',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });

        // print to console on page load
        window.addEventListener('load', function() {
        console.log('Loaded wintrmoon\'s UNIX to human readable script. This message is brought to you by April Rivenend.');
        console.warn('Load this script as async (<script src="file.js" async>) to load it from an external file. This restriction is not required if you are loading the script in-line!');
      });
        
      //NOTE - this is so that the unix time becomes machine readable, you can remove this line if you want but then the html gods wont like you
        el.setAttribute("datetime", date.toISOString());
      });