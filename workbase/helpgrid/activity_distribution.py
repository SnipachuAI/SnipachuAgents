from typing import List, Dict, Union

def generate_activity_heatmap(
    timestamps: List[int],
    counts: List[int],
    buckets: int = 10,
    normalize: bool = True
) -> List[float]:
    """
    Bucket activity counts into 'buckets' time intervals,
    returning either raw counts or normalized [0.0–1.0].
    - timestamps: list of epoch ms timestamps.
    - counts: list of integer counts per timestamp.
    """
    if not timestamps:
        return []

    t_min, t_max = min(timestamps), max(timestamps)
    span = t_max - t_min or 1
    bucket_size = span / buckets

    agg = [0] * buckets
    for t, c in zip(timestamps, counts):
        idx = min(buckets - 1, int((t - t_min) / bucket_size))
        agg[idx] += c

    if normalize:
        m = max(agg) or 1
        return [round(val / m, 4) for val in agg]
    return agg


def generate_heatmap_with_time_labels(
    timestamps: List[int],
    counts: List[int],
    buckets: int = 10,
    normalize: bool = True
) -> Dict[str, Union[List[float], List[str]]]:
    """
    Returns heatmap values along with bucket time ranges (ISO strings).
    """
    if not timestamps:
        return {"values": [], "labels": []}

    import datetime

    t_min, t_max = min(timestamps), max(timestamps)
    span = t_max - t_min or 1
    bucket_size = span / buckets

    values = generate_activity_heatmap(timestamps, counts, buckets, normalize)

    labels: List[str] = []
    for i in range(buckets):
        start = datetime.datetime.utcfromtimestamp((t_min + i * bucket_size) / 1000).isoformat()
        end = datetime.datetime.utcfromtimestamp((t_min + (i + 1) * bucket_size) / 1000).isoformat()
        labels.append(f"{start} → {end}")

    return {"values": values, "labels": labels}


def detect_peak_buckets(values: List[float], top_n: int = 3) -> List[int]:
    """
    Identify the indices of the top-N buckets with highest activity.
    """
    indexed = list(enumerate(values))
    sorted_vals = sorted(indexed, key=lambda x: x[1], reverse=True)
    return [idx for idx, _ in sorted_vals[:top_n]]
