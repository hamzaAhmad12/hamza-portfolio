(function () {
  const svg = document.getElementById('archDiagram');
  const tooltip = document.getElementById('diagramTooltip');
  const wrap = document.getElementById('diagramWrap');
  if (!svg || !tooltip || !wrap) return;

  const nodes = svg.querySelectorAll('.node');

  function showTooltip(node, evt) {
    const desc = node.getAttribute('data-desc');
    if (!desc) return;
    tooltip.textContent = desc;
    tooltip.classList.add('visible');
    tooltip.setAttribute('aria-hidden', 'false');
    positionTooltip(node);
    node.classList.add('active');
  }

  function hideTooltip(node) {
    tooltip.classList.remove('visible');
    tooltip.setAttribute('aria-hidden', 'true');
    if (node) node.classList.remove('active');
  }

  function positionTooltip(node) {
    const rect = node.querySelector('rect');
    const wrapRect = wrap.getBoundingClientRect();
    const nodeRect = rect.getBoundingClientRect();

    let left = nodeRect.left - wrapRect.left + nodeRect.width / 2;
    let top = nodeRect.top - wrapRect.top - 10;

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    tooltip.style.transform = 'translate(-50%, -100%)';

    // keep tooltip on-screen horizontally
    requestAnimationFrame(() => {
      const tRect = tooltip.getBoundingClientRect();
      if (tRect.left < wrapRect.left) {
        tooltip.style.left = (left + (wrapRect.left - tRect.left) + 8) + 'px';
      }
      if (tRect.right > wrapRect.right) {
        tooltip.style.left = (left - (tRect.right - wrapRect.right) - 8) + 'px';
      }
    });
  }

  nodes.forEach(node => {
    node.setAttribute('tabindex', '0');
    node.setAttribute('role', 'button');

    node.addEventListener('mouseenter', (e) => showTooltip(node, e));
    node.addEventListener('mouseleave', () => hideTooltip(node));
    node.addEventListener('focus', (e) => showTooltip(node, e));
    node.addEventListener('blur', () => hideTooltip(node));

    // touch support
    node.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const isActive = node.classList.contains('active');
      nodes.forEach(n => hideTooltip(n));
      if (!isActive) showTooltip(node, e);
    }, { passive: false });
  });

  // dismiss on outside tap
  document.addEventListener('touchstart', (e) => {
    if (!wrap.contains(e.target)) {
      nodes.forEach(n => hideTooltip(n));
    }
  });
})();
