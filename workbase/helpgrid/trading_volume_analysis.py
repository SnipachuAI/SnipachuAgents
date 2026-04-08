from typing import List, Dict, Union

def detect_volume_bursts(
    volumes: List[float],
    threshold_ratio: float = 1.5,
    min_interval: int = 1
) -> List[Dict[str, Union[int, float]]]:
    """
    Identify indices where volume jumps by threshold_ratio over previous.
    Returns list of dicts: {index, previous, current, ratio}.
    """
    events: List[Dict[str, Union[int, float]]] = []
    last_idx = -min_interval
    for i in range(1, len(volumes)):
        prev, curr = volumes[i - 1], volumes[i]
        ratio = (curr / prev) if prev > 0 else float("inf")
        if ratio >= threshold_ratio and (i - last_idx) >= min_interval:
            events.append({
                "index": i,
                "previous": prev,
                "current": curr,
                "ratio": round(ratio, 4)
            })
            last_idx = i
    return events


def summarize_bursts(events: List[Dict[str, Union[int, float]]]) -> Dict[str, float]:
    """
    Summarize burst events: total count, average ratio, max ratio.
    """
    if not events:
        return {"count": 0, "avg_ratio": 0.0, "max_ratio": 0.0}

    ratios = [e["ratio"] for e in events if isinstance(e["ratio"], (int, float))]
    return {
        "count": len(events),
        "avg_ratio": round(sum(ratios) / len(ratios), 4),
        "max_ratio": round(max(ratios), 4)
    }


def detect_sustained_growth(
    volumes: List[float],
    min_length: int = 3
) -> List[List[float]]:
    """
    Detect sequences of sustained growth in volume.
    Returns list of subsequences with strictly increasing values.
    """
    growth_sequences: List[List[float]] = []
    start = 0

    for i in range(1, len(volumes)):
        if volumes[i] <= volumes[i - 1]:
            if i - start >= min_length:
                growth_sequences.append(volumes[start:i])
            start = i
    if len(volumes) - start >= min_length:
        growth_sequences.append(volumes[start:])
    return growth_sequences
