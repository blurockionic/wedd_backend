export  function parseDuration(duration) {
    const match = duration.match(/(\d+)\s*(month|year|day)/i);
    if (!match) return 0;
    
    const value = parseInt(match[1], 10);
    const unit = match[2].toLowerCase();
  
    if (unit.includes("month")) return value;
    if (unit.includes("year")) return value * 12;
    if (unit.includes("day")) return value / 30; // Approximate conversion
  
    return 0;
  }