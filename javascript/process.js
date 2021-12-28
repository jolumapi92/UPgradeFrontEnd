const healingProcess = () => {
    const list = document.querySelector("#list-hunting");
    if (list.children.length === 0) {
        Swal.fire({
            title: 'Input something before processing. Please. I thought it was obvious',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/assets/john.gif")
              left top
              no-repeat
            `
          })
    } else {
        Swal.fire({
            title: 'Done. You have been cured!',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/assets/crazy.gif")
              left top
              no-repeat
            `
          })
        list.replaceChildren('');
    }
    console.log( list.children )

    
}

export { healingProcess }